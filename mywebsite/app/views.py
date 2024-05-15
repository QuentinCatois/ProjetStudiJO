from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Cart
import json
from django.contrib.auth import get_user_model  # Import the get_user_model function
import stripe
from django.conf import settings
import environ
from django.core.mail import send_mail
import qrcode
from io import BytesIO
from django.core.mail import EmailMessage

# Get the User model
User = get_user_model()

@csrf_exempt  # Disable CSRF protection
def update_cart(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data sent from the frontend
            data = json.loads(request.body)
            user_data = data.get('user')  # Retrieve user data from frontend
            cart_items = data.get('tickets', [])

            # Extract user ID from user data
            user_id = user_data.get('id')

            # Create a list to store cart items
            cart_items_list = []

            # Process each cart item and add it to the list
            for item_data in cart_items:
                title = item_data.get('title')
                category = item_data.get('category')
                price = item_data.get('price')
                quantity = item_data.get('quantity')

                # Create a dictionary representing the cart item
                cart_item = {
                    'title': title,
                    'category': category,
                    'price': price,
                    'quantity': quantity
                }
                cart_items_list.append(cart_item)

            # Retrieve the user object using the user ID
            user = User.objects.get(id=user_id)

            # Save all cart items to the database as one cart entry, associating it with the user
            cart_item = Cart.objects.create(items=cart_items_list, user=user)

            return JsonResponse({'success': True, 'message': 'Cart updated successfully', 'cart_id': str(cart_item.id)})
        
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
    
    else:
        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)


#generating a QRcode for the email
def generate_qr_code(data):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    return img


#generating an email for sending QRcode after payment confirmation via Stripe
def send_email_with_qr_code(subject, message, from_email, recipient_list, data):
    img = generate_qr_code(data)
    
    # Save the image to a BytesIO object
    img_io = BytesIO()
    img.save(img_io, format='PNG')
    img_io.seek(0)
    
    # Create an email with an attachment
    email = EmailMessage(
        subject,
        message,
        from_email,
        recipient_list,
    )
    email.attach('qrcode.png', img_io.getvalue(), 'image/png')
    email.send(fail_silently=False)


#Set up for sending email

from .models import Payment

@csrf_exempt  # Disable CSRF protection
def send_email(request):
    if request.method == 'POST':

        # Retrieve the last payment made
        last_payment = Payment.objects.order_by('-timestamp').first()
        if not last_payment:
            return JsonResponse({'success': False, 'error': 'No payment found'}, status=404)
        
        # Extract the payment_id
        payment_id = last_payment.id

        subject = 'Confirmation de votre achat de billets pour les Jeux Olympiques de Paris 2024'
        message = ("Cher(e) Maddame, Monsieur, \n" "\n"
                   "Nous vous remercions pour votre achat de tickets pour les Jeux Olympiques de Paris 2024. \n" 
                   "Nous sommes ravis de vous compter parmi nos spectateurs pour cet événement exceptionnel.\n""\n"
                   "Veuillez trouver en pièce jointe le QR code de vos tickets.Ce QR code est indispensable pour accéder à l'événement.\n" 
                   "Nous vous prions de bien vouloir le présenter à l'entrée le jour de l'événement.\n""\n"
                   "Important :\n"
                    "Assurez-vous d'imprimer le QR code ou de le sauvegarder sur votre appareil mobile.\n"
                    "Présentez le QR code à l'entrée pour accéder à l'événement.\n"
                    "Gardez une pièce d'identité avec vous pour toute vérification éventuelle.\n""\n"
                    "Si vous avez des questions ou besoin d'assistance supplémentaire, n'hésitez pas à nous contacter.\n"
                    "Nous vous remercions encore pour votre achat et avons hâte de vous accueillir aux Jeux Olympiques de Paris 2024 !\n""\n"
                    "Cordialement,\n"
                    "L'Équipe des Jeux Olympiques de Paris 2024")
        from_email = 'from2@example.com'
        recipient_list = ['to2@example.com']
        data = payment_id # use the retrieved payment_id of the last payment made from models.py payment
        send_email_with_qr_code(subject, message, from_email, recipient_list, data)
        
        return JsonResponse({'success': True, 'message': 'Email sent successfully'})
    else:
        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)
    #return redirect(checkout_session.url, code=303)
        

#Stripe implementation to make a payment test mode

env = environ.Env()

stripe.api_key = settings.STRIPE_SECRET_KEY

YOUR_DOMAIN = 'http://localhost:5173/'
@csrf_exempt  # Disable CSRF protection
def stripe_checkout_view(request):
    if request.method == 'POST':

        print(stripe.api_key)
        
        try:
            
            data = json.loads(request.body)

            cart_items = data.get('tickets', [])
            sum = data.get('sum',0) * 100 #it is accepted in cents on stripe side

             # Create a product
            product = stripe.Product.create(
                name="Mon panier",
                description="A description for my dynamic cart",
            )

            # Create a price for the product
            price = stripe.Price.create(
                product=product.id,
                unit_amount=sum,  # Price in cents (2000 cents = $20.00)
                currency='eur',
            )

            successpath  = f'http://{env("DOMAIN")}/success/?priceid={price.id}'
            cancelpath = f'http://{env("DOMAIN")}/cancel/?priceid={price.id}'
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        #'price': 'pr_1234',
                        'price': price.id,
                        'quantity': 1,
                    },
                ],
                mode='payment',
                #success_url=YOUR_DOMAIN + 'success=true',
                #cancel_url=YOUR_DOMAIN + '?canceled=true',
                success_url= successpath,#success_url
                cancel_url= cancelpath,#cancel_url
            )

            print("success_url")
            print(successpath)
            print("cancel_url")
            print(cancelpath)

        except Exception as e:
            print("error!")
            print(e)
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
            #return str(e)

    return JsonResponse({'success': True, 'message': 'Cart updated successfully', 'stripeurl': str(checkout_session.url)})
    #return redirect(checkout_session.url, code=303)
        


#view to confirm authenticated user for chechout payment in cart

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_customer_id(request):
    customer_id = request.user.id
    return Response({'customer_id': customer_id})

#view to add payment details to model Django after succesful payment confirmation from Stripe.

from django.shortcuts import get_object_or_404
from rest_framework import status
from .models import Payment, UserAccount

@api_view(['POST'])
def add_payment(request):
    user_id = request.data.get('user_id')
    price_id = request.data.get('price_id')

    user = get_object_or_404(UserAccount, id=user_id)

    payment = Payment.objects.create(user=user, price_id=price_id)
    payment.save()

    return JsonResponse({'message': 'Payment added successfully'}, status=status.HTTP_201_CREATED)
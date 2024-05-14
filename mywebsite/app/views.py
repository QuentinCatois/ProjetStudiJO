from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Cart
import json
from django.contrib.auth import get_user_model  # Import the get_user_model function

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




YOUR_DOMAIN = 'http://localhost:5173/'
@csrf_exempt  # Disable CSRF protection
def stripe_checkout_view(request):
    if request.method == 'POST':
        print("=================");
        print(stripe.api_key)
        try:
             # Create a product
            product = stripe.Product.create(
                name="My Dynamic Product",
                description="A description for my dynamic product",
            )

            # Create a price for the product
            price = stripe.Price.create(
                product=product.id,
                unit_amount=2000,  # Price in cents (2000 cents = $20.00)
                currency='usd',
            )

            successpath  = f'http://{env("DOMAIN")}/success/'
            cancelpath = f'http://{env("DOMAIN")}/cancel/'
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


#Stripe implementation

#! /usr/bin/env python3.6

"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""
'''
import stripe
from django.conf import settings
from rest_framework.views import APIView

# Test secret API key.
stripe.api_key = settings.STRIPE_SECRET_KEY

#YOUR_DOMAIN = 'http://localhost:4242'

#below code will create Stripe checkout session
class StripeCheckoutView(APIView):
    def post(self, request):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        'price': '{{PRICE_ID}}',
                        'quantity': 1,
                    },
                ],
                mode='payment',
                success_url=YOUR_DOMAIN + '?success=true',
                cancel_url=YOUR_DOMAIN + '?canceled=true',
            )
        except Exception as e:
            return str(e)

        return redirect(checkout_session.url, code=303)

#if __name__ == '__main__':
#   app.run(port=4242)'''


import stripe
from django.conf import settings
from rest_framework.views import APIView
from django.shortcuts import redirect
from .models import Cart
from django.conf import settings
import environ

env = environ.Env()

stripe.api_key = settings.STRIPE_SECRET_KEY


class StripeCheckoutView(APIView):
    def post(self, request):
        try:
            # Fetch the current user's cart
            cart = Cart.objects.get(user=request.user)
            print("adsasdadsadadsadsdasadsadsadsadsadsdasads")
            # Construct line items based on cart items
            line_items = []
            for item in cart.items:
                line_items.append({
                    'price_data': {
                        'currency': 'eur',
                        'unit_amount': int(item['price'] * 100),
                        'product_data': {
                            'name': item['title'],
                        },
                    },
                    'quantity': item['quantity'],
                })

            # Calculate total amount from cart items
            total_amount = sum(item['price'] * item['quantity'] for item in cart.items)

            # Create a Checkout session with calculated line items and total amount
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=line_items,
                mode='payment',
                success_url=f'http://{env("DOMAIN")}/success/',#success_url
                cancel_url=f'http://{env("DOMAIN")}/cancel/',#cancel_url
            )
        except Exception as e:
            return str(e)

        return JsonResponse({'url': checkout_session.url})

#set up of the view for the successfull & cancellation of Stripe payment
from django.shortcuts import render

def payment_success(request):
    return render(request, 'payment_success')

def payment_cancel(request):
    return render(request, 'payment_cancel')
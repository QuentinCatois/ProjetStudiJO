from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Cart
import json

#View to update the cart database after user checkout cart.
@csrf_exempt  # Disable CSRF protection

def update_cart(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data sent from the frontend
            data = json.loads(request.body)
            cart_items = data.get('tickets', [])
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

            #import user from model
            
            

            # Save all cart items to the database as one cart entry
            cart_item = Cart.objects.create(items=cart_items_list)
            

            return JsonResponse({'success': True, 'message': 'Cart updated successfully', 'cart_id': str(cart_item.id)}) #return the cart_id in the response JSON for Stripe
        
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
    
    else:
        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)


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

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

            # Save all cart items to the database as one cart entry
            cart_item = Cart.objects.create(items=cart_items_list)

            return JsonResponse({'success': True, 'message': 'Cart updated successfully', 'cart_id': str(cart_item.id)}) #return the cart_id in the response JSON for Stripe
        
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
    
    else:
        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)




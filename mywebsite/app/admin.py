from django.contrib import admin
from .models import *
# Register your models here.


class UserAccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'email', 'is_staff', 'is_superuser', 'is_active')
    search_fields = ('first_name', 'last_name', 'email')

class ticketsAdmin(admin.ModelAdmin):
    list_display = ('name', 'ville', 'lieu', 'date', 'heure', 'tickets_prix', 'nombre_total_tickets', 'description', 'slug')
    search_fields = ('name', 'ville', 'lieu', 'date', 'heure', 'tickets_prix', 'nombre_total_tickets', 'description', 'slug')

class CartAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'display_cart_items', 'total_price')  # Define which fields to display in the list view

    def display_cart_items(self, obj):
        # Custom method to display cart items as a string in the admin interface
        items = obj.items
        cart_items_str = ""
        for item in items:
            cart_items_str += f"{item['title']} - {item['category']} - Price: {item['price']} - Quantity: {item['quantity']}\n"
        return cart_items_str
    
    display_cart_items.short_description = 'Cart Items'  # Set the column header for display_cart_items method

    def total_price(self, obj):
        #Custom method to calculate and display the total price of the cart in the admin interface
        items = obj.items
        total_price = sum(item['price'] * item['quantity'] for item in items)
        return total_price
    
    total_price.short_description = 'Total Price'  # Set the column header for total_price method

admin.site.register(UserAccount, UserAccountAdmin)
admin.site.register(categories_offres)
admin.site.register(tickets, ticketsAdmin)
admin.site.register(Cart, CartAdmin)
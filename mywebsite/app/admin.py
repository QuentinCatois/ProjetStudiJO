from django.contrib import admin
from .models import *
# Register your models here.


class UserAccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'email', 'is_staff', 'is_superuser', 'is_active')
    search_fields = ('first_name', 'last_name', 'email')

class ticketsAdmin(admin.ModelAdmin):
    list_display = ('name', 'ville', 'lieu', 'date', 'heure', 'tickets_prix', 'nombre_total_tickets', 'description', 'slug')
    search_fields = ('name', 'ville', 'lieu', 'date', 'heure', 'tickets_prix', 'nombre_total_tickets', 'description', 'slug')

admin.site.register(UserAccount, UserAccountAdmin)
admin.site.register(categories_offres)
admin.site.register(tickets, ticketsAdmin)
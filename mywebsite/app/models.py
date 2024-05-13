from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import UserAccountManager
import uuid
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator

class UserAccount(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=200, unique=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = UserAccountManager()

    class Meta:
        verbose_name = ("User")
        verbose_name_plural = ("Users")

    def __str__(self):
        return self.email

class categories_offres(models.Model):
    categories = models.CharField(max_length=20)

    class Meta:
        verbose_name = ("Categories offres")
        verbose_name_plural = ("Categories offres")

    def __str__(self):
        return self.categories

class tickets(models.Model):
    name = models.CharField(max_length=150)
    ville = models.CharField(max_length=50)
    lieu = models.CharField(max_length=150)
    date = models.DateField()
    heure = models.TimeField()
    categories_id = models.ForeignKey(categories_offres, on_delete=models.CASCADE)
    tickets_prix = models.FloatField(default=0.0)
    nombre_total_tickets = models.IntegerField (default=0)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="logo_tickets", blank=True, null=True)
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name = ("Ticket")
        verbose_name_plural = ("Tickets")

    def __str__(self):
        return self.name

'''Old models version of Cart:

    class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    title = models.CharField(max_length=200)
    category=models.CharField(max_length=20)
    price = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return str(self.id)
    
    def total_price(self):
        return self.price * self.quantity'''
    
class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    items = models.JSONField()  # Field to store the list of cart items as JSON

    def __str__(self):
        return str(self.id)

User = get_user_model()

'''This model will create a new instance as soon as a payment request comes from React side 
and then to create the stripe payment session. This can be used later to verify in our database whether a user started a payment flow or not,
 in case if something happens in between payment process.'''

class OrderBeforConfirmation(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.id)

'''This model is to create an instance as soon as we recieve a success notification in our React app from stripe. 
This will be helful to check if a payment was successfull or not. This can be considered as - the payment is success but we have not recieved a webhook notification.'''

class OrderAfterConfirmation(models.Model):
    order = models.OneToOneField(OrderBeforConfirmation, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.id)

'''This model is to create new instances when we recieve a Webhook notification of our successfull payment process. 
After this we can give users permission to the app, this means the payment is successfull, the purchase process successfully finished.'''

class OrderAfterWebhooksConfirmation(models.Model):
    order = models.OneToOneField(OrderBeforConfirmation, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)
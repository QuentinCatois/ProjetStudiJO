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

User = get_user_model()

class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    items = models.JSONField()  # Field to store the list of cart items as JSON
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"Cart ID: {self.id}, User ID: {self.user_id}, items: {self.items}"

#Model to save Price id & user after successful Stripe payment   
class Payment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    price_id = models.CharField(max_length=100)
    user = models.ForeignKey('UserAccount', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.id} - {self.price_id}"

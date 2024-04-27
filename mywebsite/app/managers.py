from django.contrib.auth.models import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

class UserAccountManager(BaseUserManager):

    def email_validator(self, email):
        try: 
            validate_email(email)
        except ValidationError:
            raise ValueError("Vous devez procurer une adresse email valide")

    def create_user(self, first_name, last_name, email, password):

        if not first_name:
            raise ValueError("Vous devez procurer un prénom")
        
        if not last_name:
            raise ValueError("Vous devez procurer un nom")

        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError("Une adresse email est nécessaire")        

        user = self.model(first_name=first_name, last_name=last_name, email=email)

        user.set_password(password)

        user.save()

        return user

    def create_superuser(self, first_name, last_name, email, password):

        user = self.create_user(first_name, last_name, email, password)

        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError("Une adresse email est nécessaire") 

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user
from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer # To create user account with special fields

UserAccount = get_user_model() # retrieves the user class model from models.py

class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = UserAccount # model used for the serializer
        fields = ['id', 'email', 'first_name', 'last_name', 'password'] # fields that should be included in the serializer
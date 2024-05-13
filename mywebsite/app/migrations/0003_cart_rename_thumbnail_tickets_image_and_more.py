# Generated by Django 5.0.4 on 2024-05-13 12:27

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_useraccount_is_superuser'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('items', models.JSONField()),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='OrderBeforConfirmation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('buyer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.cart')),
            ],
        ),
        migrations.CreateModel(
            name='OrderAfterWebhooksConfirmation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('order', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='app.orderbeforconfirmation')),
            ],
        ),
        migrations.CreateModel(
            name='OrderAfterConfirmation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('order', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='app.orderbeforconfirmation')),
            ],
        ),
    ]

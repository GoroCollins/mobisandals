from django.contrib import admin

# Register your models here.
from . models import Shoe, Category

admin.site.register(Shoe)
admin.site.register(Category)
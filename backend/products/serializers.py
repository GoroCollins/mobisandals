from rest_framework import serializers
from . models import Category, Shoe

class CategorySerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')
    modified_by = serializers.ReadOnlyField(source='modified_by.username')
    class Meta:
        model = Category
        fields = ['code', 'description', 'created_by', 'modified_by']

class ShoeSerializer(serializers.ModelSerializer):
    category_description = serializers.CharField(source='category.description', read_only=True)
    created_by = serializers.ReadOnlyField(source='created_by.username')
    modified_by = serializers.ReadOnlyField(source='modified_by.username')
    class Meta:
        model = Shoe
        fields = ['category_description', 'image', 'name', 'description', 'price', 'id', 'quantity', 'category', 'created_by', 'modified_by']
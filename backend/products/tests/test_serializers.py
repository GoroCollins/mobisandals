from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from products.models import Category, Shoe
from products.serializers import CategorySerializer, ShoeSerializer

User = get_user_model()

class CategorySerializerTest(APITestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='test_user', password='test_password')
        cls.category = Category.objects.create(code='wmn', description='women', created_by=cls.user, modified_by=cls.user)
    
    def test_category_serializer(self):
        serializer = CategorySerializer(instance=self.category)
        expected_data = {
            'code': 'wmn',
            'description': 'women',
            'created_by': 'test_user',
            'modified_by': 'test_user'
        }
        self.assertEquals(serializer.data, expected_data)

class ShoeSerializerTest(APITestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='test_user', password='test_password')
        cls.category = Category.objects.create(code='wmn', description='women')
        cls.shoe = Shoe.objects.create(
            category=cls.category,
            image='/uploads/images/D89086_EXTRALARGE-682352451.jpg',
            name='Test Shoe',
            description='This is a test shoe.',
            price=50.00,
            quantity=10,
            created_by=cls.user,
            modified_by=cls.user
        )
    
    def test_shoe_serializer(self):
        serializer = ShoeSerializer(instance=self.shoe)
        expected_data = {
            'category_description': 'women',
            'image': '/backend/media/uploads/images/D89086_EXTRALARGE-682352451.jpg',
            'name': 'Test Shoe',
            'description': 'This is a test shoe.',
            'price': '50.00',
            'id': self.shoe.id,
            'quantity': 10,
            'category': 'wmn',
            'created_by': 'test_user',
            'modified_by': 'test_user'
        }
        self.assertEquals(serializer.data, expected_data)
# self.category.code,
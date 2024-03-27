from django.test import TestCase
from products.models import Category, Shoe
from django.contrib.auth import get_user_model
User = get_user_model()

# class CategoryTest(TestCase):
    
#     def testCategoryModel(self):
#         category = Category.objects.create(code='wmn', description='women')
#         self.assertEquals(str(category), 'women')
#         print("IsInstance : ",isinstance(category,Category))
#         self.assertTrue(isinstance(category,Category))


class ShoeTest(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='test_user', password='test_password')
        cls.category = Category.objects.create(code='wmn', description='women')
    
    def testShoeModel(self):
        shoe = Shoe.objects.create(
            category=self.category,
            image='path/to/image.jpg',
            name='Test Shoe',
            description='This is a test shoe.',
            price=50.00,
            quantity=10,
            created_by=self.user
        )
        
        self.assertEquals(str(shoe), 'Test Shoe')
        self.assertTrue(isinstance(shoe, Shoe))
        self.assertEquals(shoe.category, self.category)
        self.assertEquals(shoe.name, 'Test Shoe')
        self.assertEquals(shoe.description, 'This is a test shoe.')
        self.assertEquals(shoe.price, 50.00)
        self.assertEquals(shoe.quantity, 10)
        self.assertEquals(shoe.created_by, self.user)

class CategoryTest(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='test_user', password='test_password')
    
    def testCategoryModel(self):
        category = Category.objects.create(code='wmn', description='women', created_by=self.user)
        
        self.assertEquals(str(category), 'women')
        self.assertTrue(isinstance(category, Category))
        self.assertEquals(category.code, 'wmn')
        self.assertEquals(category.description, 'women')
        self.assertEquals(category.created_by, self.user)

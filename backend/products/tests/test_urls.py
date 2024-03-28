from django.test import TestCase

class UrlTest(TestCase):

    def testCategoriesPage(self):
        response = self.client.get('/productscategories/')
        print(response)

        self.assertEqual(response.status_code, 200)
        
    def testShoesPage(self):
        response = self.client.get('/productsshoes/')
        print(response)

        self.assertEqual(response.status_code, 200)
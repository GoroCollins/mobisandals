from . serializers import CategorySerializer, ShoeSerializer
from rest_framework import viewsets
from . models import Category, Shoe
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
    def perform_update(self, serializer):
        serializer.save(modified_by=self.request.user)

class ShoeViewSet(viewsets.ModelViewSet):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
    def perform_update(self, serializer):
        serializer.save(modified_by=self.request.user)
from rest_framework.routers import DefaultRouter
from . views import CategoryViewSet, ShoeViewSet

router = DefaultRouter()
router.register('categories', CategoryViewSet, basename='category')
router.register('shoes', ShoeViewSet, basename='shoe')

urlpatterns = router.urls
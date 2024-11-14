from django.urls import include, path
from rest_framework import routers
from products.views import IngredientViewSet, ProductViewSet


router = routers.DefaultRouter()

router.register('products', ProductViewSet)
router.register('ingredients', IngredientViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
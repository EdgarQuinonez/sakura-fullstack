from django.shortcuts import render
from rest_framework import viewsets, permissions

from products.models import Product
from products.serializers import ProductSerializer

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]
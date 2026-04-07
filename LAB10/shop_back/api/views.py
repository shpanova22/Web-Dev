from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.permissions import AllowAny
from rest_framework.authentication import BasicAuthentication

class CategoryViewSet(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
    
    
    permission_classes = [AllowAny]
    authentication_classes = []
    
    @action(detail=True, methods=['GET'])
    def products(self, request, pk=None):
        category=self.get_object()
        products=Product.objects.filter(category=category)
        serializer=ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer
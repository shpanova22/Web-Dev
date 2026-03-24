from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category
# Create your views here.

#list of all products
def product_list(request):
    products=Product.objects.all()
    products_json=[
        {
            "id":p.id,
            "name":p.name,
            "price":p.price,
            "description":p.description,
            "count":p.count,
            "is_active":p.is_active,
            "category_id":p.category.id          
        } for p in products
    ]
    return JsonResponse(products_json, safe=False)

#get one product by ID
def product_detail(request, id):
    try:
        product=Product.objects.get(id=id)
        return JsonResponse({
            "id":product.id,
            "name":product.name,
            "price":product.price,
            "description":product.description,
            "count":product.count,
            "is_active":product.is_active
        })
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)
    
#list of products by category
def category_products(request, id):
    try:
        category=Category.objects.get(id=id)
        products=Product.objects.filter(category=category)
        products_json=[{"id": p.id,"name": p.name}for p in products]
        return JsonResponse(products_json, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)



#list of all categories
def category_list(request):
    categories=Category.objects.all()
    categories_json=[
        {  
         "id":c.id,
         "name":c.name
        } for c in categories
    ]
    return JsonResponse(categories_json,safe=False)

#get one category by ID
def category_detail(request, id):
    try:
        category=Category.objects.get(id=id)
        return JsonResponse({
            "id":category.id,
            "name":category.name
        })
    except Category.DoesNotExist:
        return JsonResponse({"error":"Categoty not found"}, status=404)
    
    
    

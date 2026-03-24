from django.urls import path
from api import views

urlpatterns=[
    path('products/', views.product_list), #list of all products
    
    path('products/<int:id>/', views.product_detail), #get one product by id
    
    path('categories/', views.category_list), #list of all categories
    path('categories/<int:id>/',views.category_detail), #get one category by id
    
    path('categories/<int:id>/products/', views.category_products), #list of products by category
    
]
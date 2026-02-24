import { Component, OnInit, signal } from '@angular/core';
import {ProductService} from './services/product';
import {Category} from './models/category.model';
import {Product} from './models/product.model';
import {ProductListComponent} from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  categories = signal<Category[]>([]);
  selectedCategoryId = signal<number | null>(null);

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories.set(this.productService.getCategories());
  }

 
  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }

  
  getFilteredProducts(): Product[] {
    const id = this.selectedCategoryId();
    return id ? this.productService.getProductsByCategory(id) : [];
  }

  

removeProduct(productId: number) {
 
  this.productService.products = this.productService.products.filter(p => p.id !== productId);
  
  
  console.log('Товар окончательно удален:', productId);
}
}

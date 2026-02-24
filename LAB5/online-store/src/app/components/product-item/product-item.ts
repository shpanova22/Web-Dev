import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  
  isLiked = false; 

  
  toggleLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.product().likes++; 
    } else {
      this.product().likes--; 
    }
  }

  onDelete() {
    this.delete.emit(this.product().id);
  }

  share() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product().link)}`;
    window.open(url, '_blank');
  }
}
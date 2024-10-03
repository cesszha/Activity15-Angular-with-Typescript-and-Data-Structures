import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Product from '../list/ProductList';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
	name: string = '';
	price: number = 0;

	addProduct(): void {
		this.products.push({
			name: this.name,
			price: this.price,
		});

		this.name = '';
		this.price = 0;
	}
}

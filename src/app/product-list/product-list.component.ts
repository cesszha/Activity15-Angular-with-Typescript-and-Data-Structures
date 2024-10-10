import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Product from '../list/ProductList';
import { ProductListService } from '../services/product-list/product-list.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [] as Product[];
  constructor (private productService: ProductListService){
    this.products = this.productService.getProducts();
  }
	name: string = '';
	price: number = 0;

	addProduct():void {
    this.productService.addProduct
       this.name = ''; 
       this.price = 0;
    
	}
}

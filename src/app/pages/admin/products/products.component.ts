import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../entities/product';
import { ProductDto } from '../../../../dtos/productDto';
import { Category } from '../../../../entities/category';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Location } from '../../../../entities/Location';
import { LocationService } from '../../../../services/location.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCard} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,
    RouterLink,CommonModule,MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    AsyncPipe,
    MatRadioModule 

  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {


isSidePanelVisible:boolean = true;

 productList: Product[] = [];
 private product: Product  | null = null;
 categoryList: Category[] = [];
 locationList: Location[] = [];

 addProductForm: FormGroup;

 @Input()
  set products(value: Product) {
    this.product = value;
  }

  

  constructor(private fb: FormBuilder,
    private categoryService: CategoryService, 
    private productService: ProductService, 
    private locationService: LocationService) 
 {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      sku: ['', Validators.required],
      price: [''],
      deliveryTimeSpan: [''],
      quantity: [''],
      imageUrl: [''],
      isAvailable: [false],
      isOnSale: [false],
      isSellOnPOS: [false],
      isSellOnline: [false],
      locationId: [''],
      categoryId: [''],
    });
  }
  
  openSidePanel() {
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
    }

    onReset() {
      this.addProductForm.reset();
    }

  ngOnInit() {
    this.getCategories();
    this.getProducts();
    this.getLocations();
  }

  onSubmit(){ 
    this.addProduct();
  }

  getCategories(){
    return this.categoryService.getCategories().subscribe((response: any) => {
      this.categoryList = response;
      console.log(response);
      });
  }

//get products
  getProducts(){
    return this.productService.getProducts().subscribe((response: any) => {
      this.productList = response;
      console.log(response);
    });
  }

  addProduct(){
    return this.productService.createProduct(this.addProductForm.value).subscribe((response: any) => {
      console.log(response);
      this.getProducts();
    });
  }

  deleteProduct(id: number){
    return this.productService.deleteProduct(id).subscribe((response: any) => {
      console.log(response);
      this.getProducts();
    });
  }

   //get locations
   getLocations(){
    return this.locationService.getLocations()
    .subscribe((response: any) => {
      this.locationList = response;
      console.log(response);  
    });
  }
}

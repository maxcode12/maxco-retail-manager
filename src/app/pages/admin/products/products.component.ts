import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../entities/product';
import { ProductDto } from '../../../../dtos/productDto';
import { Category } from '../../../../entities/category';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Location } from '../../../../entities/Location';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,
    RouterLink,CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {


isSidePanelVisible:boolean = true;

 productList: Product[] = [];
 private product: ProductDto = new ProductDto();
 categoryList: Category[] = [];
 locationList: Location[] = [];

 addProductForm: FormGroup;

 @Input()
  set products(value: Product) {
    this.product = value;
  }

  

  constructor(private fb: FormBuilder,
    private categoryService: CategoryService, 
    private productService: ProductService
  ) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      sku: ['', Validators.required],
      price: ['', Validators.required],
      deliveryTimeSpan: [''],
      quantity: [''],
      imageUrl: ['', Validators.required],
      isAvailable: [''],
      isOnSale: [''],
      isPOS: [''],
      isOnline: [''],
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
}

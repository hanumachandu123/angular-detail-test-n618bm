import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from "../home.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId!: string;
  selectedProduct!:any;
  productDetailForm!:FormGroup;

  constructor(
    private route: ActivatedRoute,
    private homeService:HomeService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
    this.route.params.subscribe((params:any) => {
      this.productId = params['id'];
      console.log(this.productId)
    });
  }

  ngOnInit() {
   this.productDetailForm = this.formBuilder.group({
    id: [''],
    name: [''],
    type: [''],
    units: [''],
    price: [''],
    manufacturing: ['']
  });
  this.getProductDetailsById(this.productId)
  }

  //get the product details based on ID
  getProductDetailsById(id:any){
    this.selectedProduct = this.homeService.getProductById(id)
   
    console.log(this.selectedProduct) 
    this.productDetailForm.patchValue({
      id: this.selectedProduct['id'],
      name: this.selectedProduct['name'],
      type: this.selectedProduct['type'],
      units: this.selectedProduct['units'],
      price: this.selectedProduct['price'],
      manufacturing: this.selectedProduct['manufacturing']
    });
  }

  //navigating to dashboard
  navigateToDashboard(){
    this.router.navigate(['/home/dashboard']);
  }
}
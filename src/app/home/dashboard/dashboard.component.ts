import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { Product } from '../models/product.model';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  products!: Product[];
  cols!: any[];
  selectedSortOption: any;
  selectedColumns!: any[];
  sortOptions!: SelectItem[];
  nameFrozen:boolean = false;
  groupByType:boolean = false;
  groupByTypeName!:string
  displayProducts:boolean = true


  constructor(
    private homeService: HomeService,
    private router: Router
    ) {}

  ngOnInit() {
    this.products = this.homeService.getProducts();

    this.cols = [
      { field: 'id', header: 'Id', frozen: true },
      { field: 'name', header: 'Name', frozen: false },
      { field: 'type', header: 'Type', frozen: false },
      { field: 'price', header: 'Price', frozen: false },
      { field: 'units', header: 'Units', frozen: false },
      { field: 'manufacturing', header: 'Manufacturing', frozen: false },
      // Add more columns as needed
    ];

    this.sortOptions = [
      { label: 'Id', value: 'id' },
      { label: 'Name', value: 'name' },
      { label: 'Type', value: 'type' },
      { label: 'Price', value: 'price' },
      { label: 'Units', value: 'units' },
      { label: 'manufacturing', value: 'manufacturing' },
    ];

    this.selectedColumns = this.cols;
  }

  //on sorting option changes
  onSortOptionChange(event: any) {
    this.products = this.homeService.sortProducts(event.value);
  }
  //filter the column
  onFilter(event: Event) {
    this.products = this.dt.filteredValue || [];
  }
  //dynamic freeze name column
  freezeName(state:any){
    this.cols.forEach(x=>{
      if(x.field == "name") x.frozen=state
    })
  }
  //dynamic group by type
  groupbyTypeChange(state:any){
    this.displayProducts = false;    
    setTimeout(() => this.displayProducts = true, 0);
    if(state)
      this.groupByTypeName = "type"
    else
      this.groupByTypeName = ""
  }
  //view product details
  viewProductDetails(rowData:any){
    console.log(rowData)
    this.router.navigate(['/home/product', rowData.id]);
  }
}

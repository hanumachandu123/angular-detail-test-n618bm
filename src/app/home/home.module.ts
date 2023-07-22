import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HomeRoutingModule,
    TableModule,
    PaginatorModule,
    DropdownModule,
    MultiSelectModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    ProductDetailComponent
  ],
  providers: [HomeService],
})
export class HomeModule {}

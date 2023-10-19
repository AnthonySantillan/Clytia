import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProductsComponent} from "./pages/products/products.component";

const routes: Routes = [
  { path: '', component: DashboardComponent, },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: '**',
    redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

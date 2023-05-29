import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LayouAdminComponent } from './layout/admin/layou-admin/layou-admin.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayouAdminComponent,
    children:[
      {path: "", redirectTo: "dashboard", pathMatch: "full"}
    ]
  },
  {
    path: '',
    component: LayoutClientComponent,
    children:[
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component: HomeComponent},
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: DetailComponent },
      
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

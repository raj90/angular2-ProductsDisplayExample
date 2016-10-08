import { Routes, RouterModule } from '@angular/router';


import { ProductsComponent } from './products.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [ProductsComponent];
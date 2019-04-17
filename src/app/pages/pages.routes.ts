import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsuarioComponent} from './usuario/usuario.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'usuarios', component: UsuarioComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './Pages/Home/home-page/home-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent }

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

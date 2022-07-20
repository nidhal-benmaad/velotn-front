import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
 
export const appRoutes: Routes = [{
    path: 'site', component: AuthComponent, children: [
      
     
        { path: 'pages', loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule) },
       
    ]
}];

import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

const appRoutes: Routes = [
    { path: '', component: PrincipalComponent},
  ];

export const routing = RouterModule.forRoot(appRoutes);

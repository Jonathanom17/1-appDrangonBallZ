import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';

export const routes: Routes = [
    {path:'home', title:'HomePage', component:PageHomeComponent},
    {path:'', component:PageHomeComponent},
    {path:'**', redirectTo:'home'}


];

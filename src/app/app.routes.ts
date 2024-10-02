import { DetailCharacter } from './gits/components/interfaces/detailsCharacter-interface';
import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PlanetsPageComponent } from './pages/planetspage/planetspage.component';
import { DetailspageComponent } from './pages/detailspage/detailspage.component';
import { TransformationspageComponent } from './pages/transformationspage/transformationspage.component';

export const routes: Routes = [
    
    {path:'', component:PageHomeComponent},
    {path:'home',  component:PageHomeComponent},
    {path:'planet',component:PlanetsPageComponent},
    {path:'detail/:id', component:DetailspageComponent},
    {path:'tranformation/:id', component:TransformationspageComponent},
    {path:'**',  redirectTo:'home'},
   


];

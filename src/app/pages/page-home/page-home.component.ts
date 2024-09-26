import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { ListgitsComponent } from '../../gits/components/listgits/listgits.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [
    SidebarComponent,
    ListgitsComponent,
    
],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {

}

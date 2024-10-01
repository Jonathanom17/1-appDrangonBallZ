import { Component } from '@angular/core';

import { ListgitsComponent } from '../../gits/components/listgits/listgits.component';
import { ToolbarComponent } from "../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [
  
    ListgitsComponent,
    ToolbarComponent
],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {

}

import { Component, Input } from '@angular/core';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { ListgitsComponent } from '../../gits/components/listgits/listgits.component';

@Component({
  selector: 'app-planetspage',
  standalone: true,
  imports: [ ToolbarComponent, ListgitsComponent],
  templateUrl: './planetspage.component.html',
  styleUrl: './planetspage.component.css'
})
export class PlanetsPageComponent {
  


}

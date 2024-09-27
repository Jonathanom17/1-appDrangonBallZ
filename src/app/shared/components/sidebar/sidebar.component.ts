import { Component } from '@angular/core';
import { GitsService } from '../../../gits/services/gits.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gitServices:GitsService){

  }
  
  public getTagHistory():string[]{
    return this.gitServices.getTagHistory;
  }

}

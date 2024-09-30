import { Component } from '@angular/core';
import { GitsService } from '../../../gits/services/gits.service';

import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gitServices:GitsService){

  }
  arraydatos:string[]=[];
  public getTagHistory():string[]{
    
    return this.arraydatos;
  }

}

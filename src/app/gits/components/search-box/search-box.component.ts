import { Component, ElementRef, ViewChild } from '@angular/core';
import { GitsService } from '../../services/gits.service';

@Component({
  selector: 'gits-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gitServices:GitsService){

  }
  searchTag(){
    const newTag:string= this.tagInput.nativeElement.value;
  
    this.tagInput.nativeElement.value="";
    
  }
}

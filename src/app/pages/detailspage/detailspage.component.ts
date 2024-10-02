import {  AfterContentChecked, AfterViewInit, Component, Input, numberAttribute, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { GitsService } from '../../gits/services/gits.service';
import { DetailCharacter } from '../../gits/components/interfaces/detailsCharacter-interface';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-detailspage',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.css'
})
  
  export class DetailspageComponent implements AfterContentChecked  {
  
  detailCharacter=signal<DetailCharacter>( {
    id: 0,
    name: '',
    ki: '',
    maxKi: '',
    race: '',
    gender: '',
    description: '',
    image: '',
    affiliation: '',
    deletedAt: null,
    originPlanet: {
      id: 0,
      name: '',
      isDestroyed: false,
      description: '',
      image: '',
      deletedAt: null
    },
    transformations: []
  });



  @Input({transform: numberAttribute})
  id!:number;

  constructor(private gitsServices:GitsService){
    
  }
  

  
  ngAfterContentChecked(){
    if(this.detailCharacter().id!=this.id){
      this.detailCharacter.update(detail=> detail= this.gitsServices.getDetail(this.id))
    }
    
  }
  

  

 
}

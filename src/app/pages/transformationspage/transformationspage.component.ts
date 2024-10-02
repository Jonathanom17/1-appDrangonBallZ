import { Component, Input, numberAttribute, signal } from '@angular/core';
import { DetailCharacter, Transformations } from '../../gits/components/interfaces/detailsCharacter-interface';
import { GitsService } from '../../gits/services/gits.service';
import { JsonpClientBackend } from '@angular/common/http';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-transformationspage',
  standalone: true,
  imports: [
    JsonPipe, NgOptimizedImage
  ],
  templateUrl: './transformationspage.component.html',
  styleUrl: './transformationspage.component.css'
})
export class TransformationspageComponent {
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

  arraytransformations:Transformations[]=[];
    

  
  @Input({transform: numberAttribute})
  id!:number;

  constructor(private gitsServices: GitsService){

  }

  ngAfterContentChecked(){
    if(this.detailCharacter().id!=this.id){
      this.detailCharacter.update(detail=> detail= this.gitsServices.getDetail(this.id))
      this.arraytransformations=this.detailCharacter().transformations;
    }
    
  }

}

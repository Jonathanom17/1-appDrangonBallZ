import { Item } from './../components/interfaces/drangonball';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DragonBall } from '../components/interfaces/drangonball';
import { Observable, of } from 'rxjs';
import { DetailCharacter, Transformations } from '../components/interfaces/detailsCharacter-interface';

@Injectable({
  providedIn: 'root'
})
export class GitsService {
  arrayCharacter:Item[]= [];
  arrayDetail:DetailCharacter={
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
  };
  arraytransformations: Transformations[]=[];

  constructor() { }

  private http= inject(HttpClient);
  private baseURl:string= "https://dragonball-api.com/api/characters?page=";
  
  peticionApiDrangoBallZ(page:number):Observable<DragonBall>{

    return  this.http.get<DragonBall>(`${this.baseURl}${page}&limit=10`)
  }
  
   llenarArray():void{
    this.arrayCharacter=[];
    for(let i=1;i<7;i++){
      this.peticionApiDrangoBallZ(i).
      subscribe(character=>{ 
            character.items.flatMap(jug=>{
              this.arrayCharacter.push(jug);
          })
          
      })
       
    }
  }

 
  get getAllCharacter():Item[]{
    this.arrayCharacter.sort((a, b) => {return a.id - b.id});
    return [...this.arrayCharacter];
  }

  getArrayTranformation():void{
    this.arraytransformations=[];
    for(let i=1;i<7;i++){
      this.peticionDetailCharacter(i).
      subscribe(character=>{ 
            character.transformations.flatMap(tranformation=>{
              this.arrayCharacter.push(tranformation);
          })
          
      })
       
    }
  }

  getDetail(id:number): DetailCharacter {
   
    this.peticionDetailCharacter(id)
    .subscribe(detail=>{
        this.arrayDetail=detail;
    });
    return this.arrayDetail;
  }



  peticionDetailCharacter(id:number): Observable<DetailCharacter>{
   
    return  this.http.get<DetailCharacter>(`https://dragonball-api.com/api/characters/${id}`)
  }
  
  
}

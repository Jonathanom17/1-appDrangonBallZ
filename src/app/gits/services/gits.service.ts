import { Item } from './../components/interfaces/drangonball';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DragonBall } from '../components/interfaces/drangonball';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsService {
  arrayCharacter:Item[]= [];

  constructor() { }

  private http= inject(HttpClient);
  private baseURl:string= "https://dragonball-api.com/api/characters?page=";
  
  peticionApiDrangoBallZ(page:number):Observable<DragonBall>{

    return  this.http.get<DragonBall>(`${this.baseURl}${page}&limit=10`)
  }
  
   llenarArray():void{
    for(let i=1;i<7;i++){
      this.peticionApiDrangoBallZ(i).
      subscribe(character=>{ 
            character.items.flatMap(jug=>{
              this.arrayCharacter.push(jug);
          })
          
      })
       
    }
  }
  get getAllCharacter(){
    this.arrayCharacter.sort((a, b) => {return a.id - b.id});
    return [...this.arrayCharacter];
  }
  
}

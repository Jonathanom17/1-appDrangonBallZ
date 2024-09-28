import { Item } from './../components/interfaces/drangonball';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DragonBall } from '../components/interfaces/drangonball';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsService {
  private _tagHistory:string[]=['Gokú','Gohan','Vegueta'];

  constructor() { }

  private http= inject(HttpClient);
  private baseURl:string= "https://dragonball-api.com/api/characters";

  get getAllCharacters():Observable<DragonBall>{
    return  this.http.get<DragonBall>(`${this.baseURl}`)
  }
  
  get getTagHistory():string []{
      return [...this._tagHistory]
  }
  public searchTag(tag:string):void{
     this._tagHistory.unshift(tag);
  }
}

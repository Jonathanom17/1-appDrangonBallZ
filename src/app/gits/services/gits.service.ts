import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitsService {
  private _tagHistory:string[]=['Gokú','Gohan','Vegueta'];

  constructor() { }

  get getTagHistory():string []{
      return [...this._tagHistory]
  }
  public searchTag(tag:string){
     this._tagHistory.unshift(tag);
  }
}

import { DragonBall, Item, Meta } from './../interfaces/drangonball';

import { Component, OnInit } from '@angular/core';
import {    } from '../interfaces/drangonball';
import { GitsService } from '../../services/gits.service';
import { NgOptimizedImage } from '@angular/common';
import { catchError, of, tap } from 'rxjs';





@Component({
  selector: 'gits-cardgit',
  standalone: true,
  imports: [
    NgOptimizedImage 
  ],
  templateUrl: './cardgit.component.html',
  styleUrl: './cardgit.component.css'
})


export class CardgitComponent  {
 


  constructor(private gitsServices:GitsService,  ){
    gitsServices.llenarArray();
  }
 



  get AllCharacterDrangonBall(): Item[]{
     
    return this.gitsServices.getAllCharacter;
  }

  
}
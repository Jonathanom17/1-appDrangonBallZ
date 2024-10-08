import { DragonBall, Item, Meta } from './../interfaces/drangonball';

import { Component, Input, OnInit } from '@angular/core';
import {    } from '../interfaces/drangonball';
import { GitsService } from '../../services/gits.service';
import { NgClass, NgOptimizedImage } from '@angular/common';

import { DetailCharacter } from '../interfaces/detailsCharacter-interface';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'gits-cardgit',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterLink,NgClass
  ],
  templateUrl: './cardgit.component.html',
  styleUrl: './cardgit.component.css'
})


export class CardgitComponent  implements OnInit {
  
  valuecss:string="";
  constructor(private gitsServices:GitsService,  ){
    
  }
  ngOnInit(): void {
    this.gitsServices.llenarArray();
  }
 



  get AllCharacterDrangonBall(): Item[]{

    
     
    return this.gitsServices.getAllCharacter;
  }

  
  
}
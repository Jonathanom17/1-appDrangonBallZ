import { Component, OnInit } from '@angular/core';
import {   Item } from '../interfaces/drangonball';
import { GitsService } from '../../services/gits.service';
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'gits-cardgit',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './cardgit.component.html',
  styleUrl: './cardgit.component.css'
})


export class CardgitComponent implements OnInit {
  arrayCharacter:Item[]=[]

  constructor(private gitsServices:GitsService){

  }
  ngOnInit(): void {
    this.gitsServices.getAllCharacters.subscribe(character=>{
      this.arrayCharacter=character.items;  
    })
  }
  get AllCharacterDrangonBall(): Item[]{
    console.table(this.arrayCharacter)
    return this.arrayCharacter;
  }

  
}
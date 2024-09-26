import { Component } from '@angular/core';
interface Card{
  img:string;
  text:string;
}

@Component({
  selector: 'gits-cardgit',
  standalone: true,
  imports: [],
  templateUrl: './cardgit.component.html',
  styleUrl: './cardgit.component.css'
})


export class CardgitComponent {
  arrayCard:Card[]=[
    {
      img:"https://storage.googleapis.com/pod_public/1300/215167.jpg",
      text:"Son Goku es el protagonista principal del manga y anime de Dragon Ball"
    },
    {
      img:"https://storage.googleapis.com/pod_public/750/123536.jpg",
      text:"Gohan es es hijo de GoKu del  anime de Dragon Ball"
    },{
      img:"https://storage.googleapis.com/pod_public/1300/215167.jpg",
      text:"Son Goku es el protagonista principal del manga y anime de Dragon Ball"
    },
    {
      img:"https://storage.googleapis.com/pod_public/750/123536.jpg",
      text:"Gohan es es hijo de GoKu del  anime de Dragon Ball"
    },{
      img:"https://storage.googleapis.com/pod_public/1300/215167.jpg",
      text:"Son Goku es el protagonista principal del manga y anime de Dragon Ball"
    },
    {
      img:"https://storage.googleapis.com/pod_public/750/123536.jpg",
      text:"Gohan es es hijo de GoKu del  anime de Dragon Ball"
    }
  ]
}

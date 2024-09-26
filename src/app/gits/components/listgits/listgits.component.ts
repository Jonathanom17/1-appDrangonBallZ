import { Component } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { CardgitComponent } from "../cardgit/cardgit.component";

@Component({
  selector: 'gits-listgits',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CardgitComponent
],
  templateUrl: './listgits.component.html',
  styleUrl: './listgits.component.css'
})
export class ListgitsComponent {
  
}

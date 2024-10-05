import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Menu } from '../../../gits/components/interfaces/menu-interfaces';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink,RouterOutlet,NgClass],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  itemsMenu:Menu[]=[
    {component:'home',title:'Home', },
    
  ]
}



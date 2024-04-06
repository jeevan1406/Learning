import { Component, OnInit } from '@angular/core';

import {Recipe} from '../receipe.model';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] =[
  new Recipe('A Test Recipe','Test recipe Description'
  ,'https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D'),
  new Recipe('A Test Recipe','Test recipe Description'
  ,'https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D'),
  new Recipe('A Test Recipe','Test recipe Description'
  ,'https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D'),
  new Recipe('A Test Recipe','Test recipe Description'
  ,'https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D')
];

constructor(){}

ngOnInit(): void {
  
}
}

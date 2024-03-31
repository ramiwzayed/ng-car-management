import { Component } from '@angular/core';

@Component({
  selector: 'app-car-types',
  standalone: true,
  imports: [],
  templateUrl: './car-types.component.html',
  styleUrl: './car-types.component.css'
})
export class CarTypesComponent {
  name!: string
  color!: string
  model!: number
  image!: string


  // constructor(name: string , color: string , model: number , image:string){
  //   this.name = name
  //   this.color = color
  //   this.model = model 
  //   this.image = image
  // }
}

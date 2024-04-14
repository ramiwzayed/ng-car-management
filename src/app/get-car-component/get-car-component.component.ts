import { Component } from '@angular/core';

@Component({
  selector: 'app-get-car-component',
  standalone: true,
  imports: [],
  templateUrl: './get-car-component.component.html',
  styleUrl: './get-car-component.component.css'
})

export class GetCarComponentComponent {
  name!: string
  color!: string
  model!: number
  image!: string
}
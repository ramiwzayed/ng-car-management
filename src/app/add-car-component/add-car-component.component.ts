import { Component } from '@angular/core';

@Component({
  selector: 'app-add-car-component',
  standalone: true,
  imports: [],
  templateUrl: './add-car-component.component.html',
  styleUrl: './add-car-component.component.css'
})
export class AddCarComponent {
  name!: string
  color!: string
  model!: number
  image!: string
}
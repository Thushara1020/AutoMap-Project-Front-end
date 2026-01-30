import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CarsService } from '../../service/cars.service'; 

@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent implements OnInit {
  
  carList: any[] = []; 

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.carService.getCars().subscribe({
      next: (data: any) => {
        this.carList = data;
        console.log('දත්ත සාර්ථකව ලැබුණා:', this.carList);
      },
    });
  }
}
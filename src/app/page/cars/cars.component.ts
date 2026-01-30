import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { CarlistComponent } from "../../component/carlist/carlist.component";

@Component({
  selector: 'app-cars',
  imports: [NavbarComponent, FooterComponent, CarlistComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

}

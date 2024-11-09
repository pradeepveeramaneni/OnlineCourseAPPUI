import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CategoryComponent } from '../course/category/category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

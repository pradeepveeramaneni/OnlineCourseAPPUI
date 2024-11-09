import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { MOCK_COURSES } from '../../../mock-data/mock-course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-browse-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css'
})
export class BrowseCourseComponent {
 courses:Course[]=[];
 constructor(){
  this.courses=MOCK_COURSES;
 }

 formatPrice(price:number):string{
  return `$${price.toFixed(2)}`;
 }
}

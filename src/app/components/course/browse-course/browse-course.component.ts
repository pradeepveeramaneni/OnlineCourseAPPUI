import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../../../models/course';
import { MOCK_COURSES } from '../../../mock-data/mock-course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { courseService } from '../../../services/course.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-browse-course',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css'
})
export class BrowseCourseComponent implements OnInit, OnChanges {
@Input() categoryId:number=0;
 courses:Course[]=[];
 constructor(private _courseService:courseService){
 }

 processCourses(){
  this.getCourseByCategoryId(this.categoryId)
 }

 getCourseByCategoryId(categoryId:number){
 // this.courses=MOCK_COURSES.filter((x)=>x.categoryId==this.categoryId)
  this._courseService.getCoursesByCategoryId(categoryId).subscribe(data=>{
    this.courses=data;
  })
 }

  ngOnChanges(changes: SimpleChanges): void {
   this.processCourses();
  }
  ngOnInit(): void {
    this.processCourses();
  }

 

 formatPrice(price:number):string{
  return `$${price.toFixed(2)}`;
 }


}

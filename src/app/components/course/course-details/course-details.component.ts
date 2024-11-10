import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetails } from '../../../models/course';
import { courseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit{

  courseId:number=0;

  courseDetails: CourseDetails | null = null;


  constructor(private _route:ActivatedRoute, private _getCourseDetails:courseService){
  }
   getCoursesDetails(courseId:number){
  this._getCourseDetails.getCourseDetails(courseId).subscribe(data=>{
    this.courseDetails=data;
  })
}

  ngOnInit() {
   this._route.paramMap.subscribe(x=>{
   this.courseId=Number(x.get('courseId'));
   this.getCoursesDetails(this.courseId);

  }
   );

  }

}import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


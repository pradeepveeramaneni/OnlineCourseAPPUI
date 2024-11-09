import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-by-category',
  standalone: true,
  imports: [],
  templateUrl: './course-by-category.component.html',
  styleUrl: './course-by-category.component.css'
})
export class CourseByCategoryComponent implements OnInit{
categoryId:Number=0;
constructor(private route:ActivatedRoute){
  
}
  ngOnInit(): void {
    this.route.paramMap.subscribe(x=>{
      this.categoryId=Number(x.get('categoryId'));
    })
  }
}

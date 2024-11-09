import { Component, Input } from '@angular/core';
import { CourseCategory } from '../../../models/category';
import { MOCK_COURSE_CATEGORIES } from '../../../mock-data/mock-course-categories';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

 @Input() categories: CourseCategory[]=[];
 @Input() viewType:'tabs' | 'list'='list';
 
 constructor(private _getService:CategoryService){
    //this.categories=MOCK_COURSE_CATEGORIES;
    this.getCategories();

  }
getCategories(){
  this._getService.getCategories().subscribe(data=>{
    this.categories=data;
    
  });
}
}

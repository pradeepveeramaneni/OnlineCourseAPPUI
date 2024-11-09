import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, CourseDetails } from '../models/course';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class courseService {
    private baseUrl=`${environment.apiUrl}/Course`;
    constructor(private http:HttpClient) { }

    getCoursesByCategoryId(categoryId: number):Observable<Course[]>{
     return this.http.get<Course[]>(`${this.baseUrl}/Category/${categoryId}`);
    }

    getCourseDetails(courseId:number):Observable<CourseDetails>{
        return this.http.get<CourseDetails>(`${this.baseUrl}/Detail/${courseId}`);
    }
    getAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(`${this.baseUrl}`);
      }

    
    
}
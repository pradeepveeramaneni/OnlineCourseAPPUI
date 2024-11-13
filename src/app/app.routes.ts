import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { CategoryComponent } from './components/course/category/category.component';
import { BrowseCourseComponent } from './components/course/browse-course/browse-course.component';
import { CourseByCategoryComponent } from './components/course/course-by-category/course-by-category.component';
import { PlansAndPricingComponent } from './components/plans-and-pricing/plans-and-pricing.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent},
{path:'about-us', component: AboutUsComponent},
{path:'plans-and-price', component:PlansAndPricingComponent},
{ path: 'course/category', component: CategoryComponent},
{ path: 'course/browse', component: BrowseCourseComponent },
{ path: 'course/category/:categoryId', component: CourseByCategoryComponent},
{ path: 'course/detail/:courseId', component: CourseDetailsComponent},

];

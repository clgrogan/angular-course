import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    coreCourse: Course = COURSES[0];
    rxjsCourse = COURSES[1]; // Can infer type.
    ngrxCourse: Course = COURSES[2];




}

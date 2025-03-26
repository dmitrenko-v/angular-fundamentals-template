import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "@app/types/Course";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input()
  courses: Course[] = [];
  
  @Input()
  editable: boolean = false;
  
  @Output()
  showCourse = new EventEmitter<null>();

  @Output()
  editCourse = new EventEmitter<null>();

  @Output()
  deleteCourse = new EventEmitter<null>();
}

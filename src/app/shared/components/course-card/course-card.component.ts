import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "@app/types/Course";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input()
  editable = false;
  
  @Input()
  course!: Course;
  
  @Output()
  clickOnShow = new EventEmitter<null>();
}



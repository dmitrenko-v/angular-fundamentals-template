import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder, FormGroup, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
  courseForm: FormGroup = this.fb.group({
    title: ["", [Validators.required,  Validators.minLength(2)]],
    description: ["", [Validators.required, Validators.minLength(2)]],
    authors: [new FormArray([])],
    newAuthor: this.fb.group({
      author: ["", [Validators.required, Validators.minLength(2)]]
    }),
    duration: [1, [Validators.min(1)]]
  })
  
  get title() {
    return this.courseForm.controls["title"];
  }

  get description() {
    return this.courseForm.controls["description"];
  }

  get authors() {
    return this.courseForm.controls["authors"];
  }

  get duration() {
    return this.courseForm.controls["duration"];
  }
  
  get author() {
    return this.courseForm.get("newAuthor")?.get("author")
  }
}

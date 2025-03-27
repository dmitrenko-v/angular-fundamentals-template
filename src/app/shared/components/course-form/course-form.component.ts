import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {mockedAuthorsList} from "@shared/mocks/mocks";

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
    authors: this.fb.array([]),
    author: ["", [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z0-9]+$/)]],
    duration: [1, [Validators.min(1)]]
  })
  
  get currentAuthorNames(): string[] {
    return this.authors.controls.map(c => c.value);
  }
  
  get title() {
    return this.courseForm.controls["title"];
  }

  get description() {
    return this.courseForm.controls["description"];
  }

  get authors() {
    return this.courseForm.controls["authors"] as FormArray;
  }

  get duration() {
    return this.courseForm.controls["duration"];
  }
  
  get author() {
    return this.courseForm.controls["author"]
  }
  
  createAuthor() {
    const authorName = this.author.value
    if (this.currentAuthorNames.includes(authorName)) {
      return;
    }
    this.authors.push(new FormControl(authorName));
    mockedAuthorsList.push({id: crypto.randomUUID(), name: authorName })
    this.author.reset();
  }
  
  addAuthor(authorName: string) {
    if (this.currentAuthorNames.includes(authorName)) {
      return;
    }
    this.authors.push(new FormControl(authorName));
  }
  
  deleteAuthor(authorName: string) {
    if (!this.currentAuthorNames.includes(authorName)) {
      return;
    }
    
    const index = this.authors.controls.findIndex(c => c.value == authorName);
    this.authors.removeAt(index);
  }

  protected readonly mockedAuthorsList = mockedAuthorsList;
}

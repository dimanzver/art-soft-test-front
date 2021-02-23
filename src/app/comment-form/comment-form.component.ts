import {Component, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() parentId : number|null = null;
  // @ts-ignore
  @Input() topicId : number;

  @Output() createdComment = new EventEmitter();

  form: FormGroup = new FormGroup({
    body: new FormControl('', [Validators.required]),
    author_name: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if(this.form.invalid)
      return;

    let data = {
      ...this.form.value,
      parent_id: this.parentId,
      topic_id: this.topicId,
    };

    fetch('http://localhost:8081/comments', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json().then(comment => {
      this.createdComment.emit(comment);
    }));
  }

}

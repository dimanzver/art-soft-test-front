import {Component, Input, OnInit} from '@angular/core';
import Comment from "../../types/Comment";

@Component({
  selector: 'app-comments-list-item',
  templateUrl: './comments-list-item.component.html',
  styleUrls: ['./comments-list-item.component.scss']
})
export class CommentsListItemComponent implements OnInit {

  formattedDateTime: string = '';
  showReplyForm: boolean = false;

  // @ts-ignore
  @Input() comment: Comment;

  constructor() { }

  ngOnInit(): void {
    // TODO: to utils
    let date = new Date(Date.parse(this.comment.created_at));
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    this.formattedDateTime = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  bindCommentAdded(comment : Comment) {
    this.showReplyForm = false;
    this.comment.children.push(comment);
  }

}

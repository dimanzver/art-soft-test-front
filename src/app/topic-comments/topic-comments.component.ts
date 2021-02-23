import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import Comment from "../../types/Comment";

@Component({
  selector: 'app-topic-comments',
  templateUrl: './topic-comments.component.html',
  styleUrls: ['./topic-comments.component.scss']
})
export class TopicCommentsComponent implements OnInit {

  comments: Comment[] = [];
  topicId: number;
  showCommentForm: boolean = false;

  constructor(private route:ActivatedRoute) {
    this.topicId = Number(this.route.snapshot.paramMap.get('id'));
  }

  fetchComments() {
    fetch('http://localhost:8081/comments/topic/?topicId=' + this.topicId)
      .then(response => response.json().then(comments => {
        this.comments = comments;
      }));
  }

  ngOnInit(): void {
    this.fetchComments();
  }

  bindCommentAdded(comment : Comment) {
    this.showCommentForm = false;
    this.comments.push(comment);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicCommentsComponent } from './topic-comments/topic-comments.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsListItemComponent } from './comments-list-item/comments-list-item.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TopicCommentsComponent,
    TopicsListComponent,
    CommentsListComponent,
    CommentsListItemComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopicCommentsComponent} from './topic-comments/topic-comments.component';
import {TopicsListComponent} from './topics-list/topics-list.component';

const routes: Routes = [
  {
    path: '',
    component: TopicsListComponent,
  },
  {
    path: 'topic/:id/comments',
    component: TopicCommentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

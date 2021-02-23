export default class Comment {
  id: number = 0;
  parent_id: number|null = null;
  topic_id: number = 0;
  body: string = '';
  created_at: string = '';
  author_name: string = '';
  children: Comment[] = [];
}

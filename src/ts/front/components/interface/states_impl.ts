import * as ToDoItem from './todo_item_impl';

export interface ToDoState {
  text: string;
  todos: ToDoItem.Item[];
}

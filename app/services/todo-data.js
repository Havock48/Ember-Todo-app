import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

class Todo {
  @tracked id = '';
  @tracked title = '';
  @tracked isChecked = false;

  constructor({ id, title, isChecked }) {
    this.id = id;
    this.title = title;
    this.isChecked = isChecked;
  }
}

export default class TodoDataService extends Service {
  @tracked todos = [
    new Todo({
      id: '1',
      title: 'Example One',
      isChecked: false,
    }),
    new Todo({
      id: '2',
      title: 'Example Two',
      isChecked: false,
    }),
  ];

  todoAdd(todo) {
    let todoItem = new Todo({
      id: todo.id,
      title: todo.title,
      isChecked: false,
    });

    this.todos = [...this.todos, todoItem]
  }

  todoRemove(todo) {
    this.todos.removeObject(todo);
  }

  todoChecked(todo) {
    if (todo.isChecked) {
      todo.isChecked = false;
    } else {
      todo.isChecked = true;
    }
  }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ListItemComponent extends Component {
  @service todoData;

  @action
  removeTodo(title) {
    this.todoData.todoRemove(title);
  }

  @action
  isChecked(title) {
    this.todoData.todoChecked(title);
  }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AddFormComponent extends Component {
  @service todoData;
  @tracked missingTitle = false;
  @tracked todoTitle = '';

  @action
  handleInput(e) {
    this.todoTitle = e.target.value
  }

  @action
  addTodo(title, e) {
    e.preventDefault();
    if (!title) {
        // Validation - check if input is empty
        this.missingTitle = true
    } else {
      // Validation - check if input is empty
      this.missingTitle = false    
      // Add Todo
      this.todoData.todoAdd({ title });
      // Clear input
      this.todoTitle = '';
    }
  }
}

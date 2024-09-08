import { CanDeactivateFn } from '@angular/router';
import { TodosComponent } from '../pages/todos/todos.component';

export const outputGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const todosComponent = component as TodosComponent;
  if(todosComponent.form.touched){
    return window.confirm("¿Deseas descartar los cambios?");
  }

  return true;
};

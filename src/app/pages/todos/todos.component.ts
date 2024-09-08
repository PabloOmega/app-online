import { Component } from '@angular/core';
import { TodosService, Todo } from '../../services/todos/todos.service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Todo[] = [];
  form: FormGroup;

  constructor(private todosService: TodosService, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      completed: [false]
    })
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(): void {
    if(this.form.invalid) return;
    this.todosService.addTodo(this.form.value)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  updateTodo({id}: Todo): void {
    if(this.form.invalid) return;
    this.todosService.updateTodo({id, ...this.form.value})
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  deleteTodo({ id }: Todo): void {
    this.todosService.deleteTodo(id)
      .catch(error => console.error(error));
  }
}

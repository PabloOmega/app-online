import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private firestore: Firestore) { }

  getTodos() : Observable<Todo[]> {
    const todosRef = collection(this.firestore, 'todos');
    return collectionData(todosRef, { idField: 'id' })
  }

  getTodo(id: string): Observable<Todo> {
    const docRef = doc(this.firestore, `todos/${id}`);
    return docData(docRef, { idField: 'id' });
  }

  addTodo(todo: Todo){
    const todosRef = collection(this.firestore, 'todos');
    return addDoc(todosRef, todo);
  }

  updateTodo({ id, title, completed }: Todo){
    const docRef = doc(this.firestore, `todos/${id}`);
    return updateDoc(docRef, {id, title, completed});
  }

  deleteTodo(id: string){
    const docRef = doc(this.firestore, `todos/${id}`);
    return deleteDoc(docRef);
  }
}

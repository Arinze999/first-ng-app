import { Pipe, PipeTransform } from '@angular/core';
import { Todom } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Todom[], searchTerms: string): Todom[] {
    if (!searchTerms) {
      return todos;
    }

    const text = searchTerms.toLowerCase();

    return todos.filter((todo) => {
      return todo.title.toLocaleLowerCase().includes(searchTerms);
    });
  }
}

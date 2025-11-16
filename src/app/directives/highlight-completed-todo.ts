import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  isCompleted = input(false);

  el = inject(ElementRef);

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  });
}

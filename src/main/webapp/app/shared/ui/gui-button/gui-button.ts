import { Component, input, output } from '@angular/core';

@Component({
  selector: 'jhi-gui-button',
  templateUrl: './gui-button.html',
  styleUrl: './gui-button.scss',
})
export class GuiButton {
  readonly caption = input.required<string>();
  readonly color = input<string>('var(--ui-button-gold)');
  readonly width = input<string>('auto');
  readonly height = input<string>('auto');

  readonly buttonClick = output<void>();
}

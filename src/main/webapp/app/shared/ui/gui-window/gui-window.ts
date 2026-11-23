import { Component, input } from '@angular/core';

@Component({
  selector: 'jhi-gui-window',
  templateUrl: './gui-window.html',
  styleUrl: './gui-window.scss',
})
export class GuiWindow {
  readonly title = input.required<string>();
  readonly width = input<string>('100%');
  readonly height = input<string>('auto');
}

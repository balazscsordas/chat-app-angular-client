import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
})
export class MyMessageComponent {
  @Input() text: string | undefined;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-group-item',
  templateUrl: './chat-group-item.component.html',
})
export class ChatGroupItemComponent {
  @Input() first_name: string | null = null;
  @Input() last_name: string | null = null;
}

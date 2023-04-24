import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-chat-block-top-profile',
  templateUrl: './chat-block-top-profile.component.html',
})
export class ChatBlockTopProfileComponent {
  constructor(public messageService: MessageService) {}
}

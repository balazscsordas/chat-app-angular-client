import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-block',
  templateUrl: './chat-block.component.html',
})
export class ChatBlockComponent {
  messages = [
    { sendBy: 1, text: 'Hello Laci' },
    { sendBy: 1, text: 'Mizu?' },
    { sendBy: 2, text: 'Hali Karesz' },
    { sendBy: 2, text: 'Semmi' },
    { sendBy: 1, text: 'Ok' },
    { sendBy: 1, text: 'Kell valami?' },
    { sendBy: 1, text: 'Szólj' },
    { sendBy: 1, text: 'Ok?' },
  ];
}

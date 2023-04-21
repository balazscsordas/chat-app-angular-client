import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-message',
  templateUrl: './partner-message.component.html',
})
export class PartnerMessageComponent {
  @Input() text: string | undefined;
}

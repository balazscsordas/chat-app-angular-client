import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message/message.service';

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-chat-group-item',
  templateUrl: './chat-group-item.component.html',
})
export class ChatGroupItemComponent {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {}

  @Input() user: IUser | null = null;

  handleClick() {
    if (this.user) {
      this.messageService.partnerFullName = `${this.user.first_name} ${this.user.last_name}`;
    }
    this.dialog.closeAll();
    this.router.navigateByUrl(`/chat/${this.user?.id}`);
  }
}

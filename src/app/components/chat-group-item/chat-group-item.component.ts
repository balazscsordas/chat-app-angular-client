import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
  constructor(private router: Router, private dialog: MatDialog) {}

  @Input() user: IUser | null = null;

  handleClick() {
    this.dialog.closeAll();
    this.router.navigateByUrl(`/chat/${this.user?.id}`);
  }
}

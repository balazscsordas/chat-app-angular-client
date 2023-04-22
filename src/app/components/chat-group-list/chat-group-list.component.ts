import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CreateNewRoomDialogComponent } from '../create-new-room-dialog/create-new-room-dialog.component';
import { IUser } from '../chat-group-item/chat-group-item.component';

@Component({
  selector: 'app-chat-group-list',
  templateUrl: './chat-group-list.component.html',
})
export class ChatGroupListComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  users: IUser[] | null = null;
  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  });

  openCreateRoomDialog(): void {
    this.dialog.open(CreateNewRoomDialogComponent);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  handleSubmit() {}

  private getUsers() {
    this.http.get<IUser[]>(`${environment.apiBaseURL}user`).subscribe((res) => {
      this.users = res;
    });
  }
}

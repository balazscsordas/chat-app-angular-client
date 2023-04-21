import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CreateNewRoomDialogComponent } from '../create-new-room-dialog/create-new-room-dialog.component';

@Component({
  selector: 'app-chat-group-list',
  templateUrl: './chat-group-list.component.html',
})
export class ChatGroupListComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  rooms: string[] | null = null;
  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  });

  openCreateRoomDialog(): void {
    const dialogRef = this.dialog.open(CreateNewRoomDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.getRooms();
  }

  handleSubmit() {}

  private getRooms() {
    this.http
      .get<string[]>(`${environment.apiBaseURL}room`)
      .subscribe((res) => {
        this.rooms = res;
      });
  }
}

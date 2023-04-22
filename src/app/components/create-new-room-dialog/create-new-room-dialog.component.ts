import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { IUser } from '../chat-group-item/chat-group-item.component';

@Component({
  selector: 'app-create-new-room-dialog',
  templateUrl: './create-new-room-dialog.component.html',
  styleUrls: ['./create-new-room-dialog.component.scss'],
})
export class CreateNewRoomDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateNewRoomDialogComponent>,
    private http: HttpClient
  ) {}

  users: IUser[] = [];
  showUsers = true;
  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  });

  ngOnInit(): void {
    this.detectInputChange();
  }

  resetSearchInput() {
    this.searchForm.reset();
    this.users = [];
  }

  private detectInputChange() {
    this.searchForm.get('searchInput')?.valueChanges.subscribe((value) => {
      if (value && value !== '') {
        this.getFilteredUsers(value);
      }
    });
  }

  private getFilteredUsers(filter: string) {
    const params = { filter };
    this.http
      .get<IUser[]>(`${environment.apiBaseURL}user/filtered-users`, {
        params,
      })
      .subscribe((res) => {
        this.users = res;
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

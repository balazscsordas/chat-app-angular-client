import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

interface IUserList {
  first_name: string;
  last_name: string;
}

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

  userList: IUserList[] = [];
  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  });

  ngOnInit(): void {
    this.detectInputChange();
  }

  private detectInputChange() {
    this.searchForm.get('searchInput')?.valueChanges.subscribe((value) => {
      if (value && value !== '') {
        this.getFilteredUserList(value);
      }
    });
  }

  private getFilteredUserList(filter: string) {
    const params = { filter };
    this.http
      .get<{ userList: IUserList[] }>(`${environment.apiBaseURL}user/filter`, {
        params,
      })
      .subscribe((res) => {
        this.userList = res.userList;
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

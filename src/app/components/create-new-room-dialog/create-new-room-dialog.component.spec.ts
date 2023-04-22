import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewRoomDialogComponent } from './create-new-room-dialog.component';

describe('CreateNewRoomDialogComponent', () => {
  let component: CreateNewRoomDialogComponent;
  let fixture: ComponentFixture<CreateNewRoomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewRoomDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewRoomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

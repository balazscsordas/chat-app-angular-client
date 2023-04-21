import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupItemComponent } from './chat-group-item.component';

describe('ChatGroupItemComponent', () => {
  let component: ChatGroupItemComponent;
  let fixture: ComponentFixture<ChatGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGroupItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

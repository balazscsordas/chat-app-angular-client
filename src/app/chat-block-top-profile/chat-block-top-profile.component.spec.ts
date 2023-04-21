import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBlockTopProfileComponent } from './chat-block-top-profile.component';

describe('ChatBlockTopProfileComponent', () => {
  let component: ChatBlockTopProfileComponent;
  let fixture: ComponentFixture<ChatBlockTopProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBlockTopProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBlockTopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

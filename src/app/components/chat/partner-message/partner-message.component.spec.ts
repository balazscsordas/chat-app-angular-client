import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerMessageComponent } from './partner-message.component';

describe('PartnerMessageComponent', () => {
  let component: PartnerMessageComponent;
  let fixture: ComponentFixture<PartnerMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskCardComponent } from './mask-card.component';

describe('MaskCardComponent', () => {
  let component: MaskCardComponent;
  let fixture: ComponentFixture<MaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrvHomeComponent } from './new-arrv-home.component';

describe('NewArrvHomeComponent', () => {
  let component: NewArrvHomeComponent;
  let fixture: ComponentFixture<NewArrvHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrvHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArrvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

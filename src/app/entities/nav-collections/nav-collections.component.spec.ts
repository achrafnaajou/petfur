import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCollectionsComponent } from './nav-collections.component';

describe('NavCollectionsComponent', () => {
  let component: NavCollectionsComponent;
  let fixture: ComponentFixture<NavCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCollectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

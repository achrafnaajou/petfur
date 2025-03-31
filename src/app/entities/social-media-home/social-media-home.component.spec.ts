import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaHomeComponent } from './social-media-home.component';

describe('SocialMediaHomeComponent', () => {
  let component: SocialMediaHomeComponent;
  let fixture: ComponentFixture<SocialMediaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFilterComponent } from './categorie-filter.component';

describe('CategorieFilterComponent', () => {
  let component: CategorieFilterComponent;
  let fixture: ComponentFixture<CategorieFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

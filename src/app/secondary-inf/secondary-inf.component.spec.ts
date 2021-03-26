import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryInfComponent } from './secondary-inf.component';

describe('SecondaryInfComponent', () => {
  let component: SecondaryInfComponent;
  let fixture: ComponentFixture<SecondaryInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

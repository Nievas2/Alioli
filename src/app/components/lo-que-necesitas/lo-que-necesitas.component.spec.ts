import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoQueNecesitasComponent } from './lo-que-necesitas.component';

describe('LoQueNecesitasComponent', () => {
  let component: LoQueNecesitasComponent;
  let fixture: ComponentFixture<LoQueNecesitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoQueNecesitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoQueNecesitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarExameComponent } from './adicionar-exame.component';

describe('AdicionarExameComponent', () => {
  let component: AdicionarExameComponent;
  let fixture: ComponentFixture<AdicionarExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarExameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDiagnosticoComponent } from './cadastrar-diagnostico.component';

describe('CadastrarDiagnosticoComponent', () => {
  let component: CadastrarDiagnosticoComponent;
  let fixture: ComponentFixture<CadastrarDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarDiagnosticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

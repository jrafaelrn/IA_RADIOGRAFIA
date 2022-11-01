import { Component, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-diagnostico',
  templateUrl: './cadastrar-diagnostico.component.html',
  styleUrls: ['./cadastrar-diagnostico.component.css']
})
export class CadastrarDiagnosticoComponent implements OnInit {

  @Output() icone: string = 'description';
  @Output() title: string = 'Cadastrar Diagnóstico';

  form: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.form = this.formBuilder.group({
      cpf: [''],
      observacao: ['']
    });
  }

  ngOnInit(): void {}

  onEnviarEmail() {

  }

}

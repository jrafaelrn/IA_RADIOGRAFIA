import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-diagnostico',
  templateUrl: './cadastrar-diagnostico.component.html',
  styleUrls: ['./cadastrar-diagnostico.component.css']
})
export class CadastrarDiagnosticoComponent implements OnInit {

  @Output() icone: string = 'description';
  @Output() title: string = 'Cadastrar Diagnóstico';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cpf: [''],
      observacao: ['']
    });
  }

  ngOnInit(): void {}

  onEnviarEmail() {

  }

}

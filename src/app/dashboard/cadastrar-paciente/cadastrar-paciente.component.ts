import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css']
})
export class CadastrarPacienteComponent implements OnInit {

  @Output() icone: string = 'person';
  @Output() title: string = 'Cadastrar Paciente';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private location: Location) {
    this.form = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      endereco: [''],
      telefone: [''],
      numero: [''],
      sexo: ['']
    });
  }

  ngOnInit(): void {}



  onSubmit() {
    //this.service.save(this.form.value)
      //.subscribe(result => this.onSucess(), error => this.onError());
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  
  private onSucess() {
    this.snackBar.open('Pessoa Salva com sucesso!', '', {duration: 3000});
  }

  private onError() {
    this.snackBar.open('Erro ao Adicionar Pessoa.', '', { duration: 3000 });
  }


}

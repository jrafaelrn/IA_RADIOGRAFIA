import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Pessoa } from 'src/app/model/pessoa';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css']
})
export class CadastrarPacienteComponent implements OnInit {

  @Output() icone: string = 'person';
  @Output() title: string = 'Cadastrar Paciente';
  @Input() file: string = 'https://i.pinimg.com/474x/8d/ee/de/8deede6888af1f1be092c160e76a77f0.jpg';
  form: FormGroup;
  pessoa = new Pessoa();

  constructor(private formBuilder: FormBuilder, 
    private snackBar: MatSnackBar, 
    private location: Location,
    private service: ServiceService) {

    this.form = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      endereco: [''],
      data_nascimento: [''],
      descricao_caso: [''],
      sexo: ['']
    });
  }


  ngOnInit(): void {}



  onSubmit() {

    this.pessoa = {
      cpf: this.form.value.cpf,
      nome: this.form.value.nome,
      endereco: this.form.value.endereco,
      data_nascimento: this.form.value.data_nascimento,
      descricao_caso:  '',
      sexo: this.form.value.sexo
    }


    this.service.savePessoa(this.pessoa).subscribe(result => this.onSucess(), error => this.onError());

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

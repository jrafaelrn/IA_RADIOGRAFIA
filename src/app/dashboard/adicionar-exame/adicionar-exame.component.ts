import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Exame } from 'src/app/model/exame';

@Component({
  selector: 'app-adicionar-exame',
  templateUrl: './adicionar-exame.component.html',
  styleUrls: ['./adicionar-exame.component.css']
})
export class AdicionarExameComponent implements OnInit {

  @Output() icone: string = 'assignment_add';
  @Output() title: string = 'Adicionar Exame';
  mensagem: string = '';
  nomeArquivo: string = '';
  form: FormGroup;
  exame = new Exame();
  formData = new FormData();

  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private httpClient: HttpClient) {
    this.form = this.formBuilder.group({
    cpf_paciente: [''],
    id_hospital: [''],
    id_diagnostico: [''],
    cpf_operador: [''],
    });
  }

  ngOnInit(): void { }



  onSubmit() {

    const date = new Date().toLocaleDateString();

    this.exame = { 
    cpf_paciente: this.form.value.cpf_paciente,
    id_hospital: this.form.value.id_hospital,
    data_criacao: date,
    cpf_operador: this.form.value.cpf_operador
    }

    const api = '?cpf_paciente='+this.exame.cpf_paciente+'&id_hospital='
    +this.exame.id_hospital+'&data_criacao='
    +this.exame.data_criacao+'&cpf_operador='+this.exame.cpf_operador;

    console.log(api)

    this.httpClient.post(environment.upload+api, this.formData, {

      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.atualizarProgresso(event);
      } else if (event.type === HttpEventType.Response) {
        this.mensagem = '';
      }

    });



    this.router.navigate(['dashboard/lista-exames']);
  }

  onCancel() {
    this.location.back();
  }




  // @ts-ignore
  onFileSelected(event) {
    const arquivoSelecionado: File = <File>event.target.files[0];

    if (arquivoSelecionado) {
      this.uploadArquivo(arquivoSelecionado);
      console.log(arquivoSelecionado);
    }
  }


  private uploadArquivo(arquivoSelecionado: File) {
    this.formData.append("imagem", arquivoSelecionado);
    this.nomeArquivo = arquivoSelecionado.name;
  }

  private atualizarProgresso(evento: HttpProgressEvent) {

    try {
      // @ts-ignore
      const mensagemProgresso = 'Progresso do Upload: ' + Math.round(evento.loaded / evento.total * 100) + '%';

      console.log(mensagemProgresso);
      this.mensagem = mensagemProgresso;

    } catch (error) {
      console.warn('erro', error);
    }

  }
}

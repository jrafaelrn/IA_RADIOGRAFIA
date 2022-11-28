import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Diagnosticojson } from 'src/app/model/diagnosticos';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-cadastrar-diagnostico',
  templateUrl: './cadastrar-diagnostico.component.html',
  styleUrls: ['./cadastrar-diagnostico.component.css']
})
export class CadastrarDiagnosticoComponent implements OnInit {

  @Output() icone: string = 'description';
  @Output() title: string = 'Cadastrar Diagnóstico';

  diagnostico = new Diagnosticojson();
  file: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ServiceService, private router: Router) {
    this.form = this.formBuilder.group({
      descricao: ['']
    });

    this.file = 'http://localhost:5000/buscarDeteccao?id=' + this.service.consultarID;
   

  }

  ngOnInit(): void {}

  onSubmit() {

    const date = new Date().toLocaleDateString();

    this.diagnostico = {
    data_criacao: date,
    cpf_medico: this.service.usuarioLogado.cpf,
    id_radiografia: this.service.consultarID,
    descricao: this.form.value.descricao
    }

    console.log(this.diagnostico)


    this.service.limparId;
    this.service.saveDiagnostico(this.diagnostico).subscribe(res => this.router.navigate(['dashboard/lista-diagnosticos']));

  }

  

}

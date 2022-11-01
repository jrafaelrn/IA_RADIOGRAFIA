import { Component, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-exame',
  templateUrl: './adicionar-exame.component.html',
  styleUrls: ['./adicionar-exame.component.css']
})
export class AdicionarExameComponent implements OnInit {

  @Output() icone: string = 'assignment_add';
  @Output() title: string = 'Adicionar Exame';
  form: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private snackBar: MatSnackBar, private location: Location, private router: Router) {
    this.form = this.formBuilder.group({
      cpf: [''],
      caminho_img: ['']
    });
  }

  ngOnInit(): void {}



  onSubmit() {
      //this.service.save(this.form.value)
      //.subscribe(result => this.onSucess(), error => this.onError());
    this.router.navigate(['dashboard/resultado']);
    //this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  
  private onSucess() {
    this.snackBar.open('Exame Salvo com sucesso!', '', {duration: 3000});
  }

  private onError() {
    this.snackBar.open('Erro ao Adicionar Exame.', '', { duration: 3000 });
  }
}

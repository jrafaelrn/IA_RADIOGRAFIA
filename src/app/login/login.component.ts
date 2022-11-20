import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from '../model/login';
import { AuthService } from '../services/auth.service';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-input-property',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup;
  contador: number = 0;
  login = new Login();

  constructor(
    private formBuilder: FormBuilder, 
    private auth: AuthService, 
    private service: ServiceService, 
    private router: Router) {
    this.form = this.formBuilder.group({
      crm: ['']
    });

    this.tempoRotacaoImagem();
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {

    this.service.login(this.form.value.crm).subscribe(data => this.execute(data));


    this.service.salvarSessionStorage(this.login);
    this.router.navigate(['dashboard']);

  }

  public trocaDeDiv() {
    if (this.contador == 2) this.contador = 0;
    return this.contador;
  }

  public tempoRotacaoImagem(): void {
    let time = 3000;

    setInterval(() => {
      this.contador++;
      this.trocaDeDiv();
    }, time);
  }

  execute(login: any){
    this.login = login;
    this.service.salvarSessionStorage(this.login);
    this.router.navigate(['dashboard']);
  }

 






}

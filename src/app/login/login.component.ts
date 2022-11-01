import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-input-property',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: UntypedFormGroup;
  contador: number = 0;

  constructor(
    private formBuilder: UntypedFormBuilder, 
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


    this.service.login(1).subscribe(data => {
      console.log(data);
      this.router.navigate(['dashboard']);
    },
      (error) => {
        console.error(error);
      });
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






}

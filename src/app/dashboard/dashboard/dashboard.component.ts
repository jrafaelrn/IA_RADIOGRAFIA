import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}


  public onSubmit(){
    /*
    this.login = {
      agencia: this.form.value.agencia,
      conta: this.form.value.conta
    }

    this.service.salvarSessionStorage(this.login);

    console.log(this.login);
    
    this.service.login(this.login).subscribe(data => {
      console.log(data);
      this.router.navigate(['mostrar']);
    },
      (error) => {
        console.error(error);
      });
      */
      this.router.navigate(['login']);

  }

}

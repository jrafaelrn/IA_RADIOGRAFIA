import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from 'src/app/model/login';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private router:Router, public service: ServiceService) {

  }

  ngOnInit(): void {}


  public onSubmit(){
    
      this.router.navigate(['login']);

  }

}

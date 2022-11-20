import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() icone: string = 'home';
  @Input() title: string = 'Home';
  

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {}

  public onSubmit(rota: string){

     if(rota == 'login'){
      this.service.logout();
     }

      this.router.navigate([rota]);
  }

}

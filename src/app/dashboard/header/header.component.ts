import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() icone: string = 'home';
  @Input() title: string = 'Home';
  

  constructor(private router: Router) { }

  ngOnInit(): void {}

  public onSubmit(rota: string){
      this.router.navigate([rota]);
  }

}

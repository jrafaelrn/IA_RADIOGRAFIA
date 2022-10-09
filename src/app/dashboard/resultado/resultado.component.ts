import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Output() icone: string = 'thumb_up_alt';
  @Output() title: string = 'Resultado Processado';

  constructor(private router: Router) { }

  ngOnInit(): void {}

  public onSubmit(rota: string) {
    this.router.navigate([rota]);
  }

}

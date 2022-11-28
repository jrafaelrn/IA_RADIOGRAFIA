import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/services/service.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-lista-exames',
  templateUrl: './lista-exames.component.html',
  styleUrls: ['./lista-exames.component.css']
})
export class ListaExamesComponent implements OnInit {

  @Output() icone: string = 'view_list';
  @Output() title: string = 'Listagem de Exames';
  radiografias: any;

  constructor(private serviceService: ServiceService, private dialog: MatDialog, private router:Router) {
    this.serviceService.listExames().subscribe(res => this.radiografias = res.radiografias);

   
   }

  ngOnInit(): void {}

  onButton(id: number){

    this.serviceService.salvarSessionID(id);
    this.router.navigate(['dashboard/cadastrar-diagnostico']);

  }

  onError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: message
    });
  }

  

}

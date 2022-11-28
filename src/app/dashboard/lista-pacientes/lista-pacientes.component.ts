import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Pessoa } from 'src/app/model/pessoa';
import { ServiceService } from 'src/app/services/service.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  @Output() icone: string = 'groups';
  @Output() title: string = 'Listagem de Pacientes';
  pessoas?: Pessoa[];

  constructor(private serviceService: ServiceService, private dialog: MatDialog) {

    this.serviceService.listPessoas().subscribe(res => this.pessoas = res.pacientes);

   }

  ngOnInit(): void {}

  onError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: message
    });
  }

}

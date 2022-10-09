import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Diagnosticos } from 'src/app/model/diagnostico';
import { ServiceService } from 'src/app/services/service.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-lista-diagnosticos',
  templateUrl: './lista-diagnosticos.component.html',
  styleUrls: ['./lista-diagnosticos.component.css']
})
export class ListaDiagnosticosComponent implements OnInit {

  @Output() icone: string = 'list';
  @Output() title: string = 'Listagem de Diagnósticos';
  diagnosticos$: Observable<Diagnosticos[]>;

  constructor(private serviceService: ServiceService, private dialog: MatDialog) {
    this.diagnosticos$ = serviceService.listDiagnosticos()
    .pipe(
      catchError(error => {
      this.onError('Erro ao carregar diagnósticos.');
      return of ([])
    })
    );
   }

  ngOnInit(): void {}

  onError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: message
    });
  }
}

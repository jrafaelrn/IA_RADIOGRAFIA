import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Exame } from 'src/app/model/exame';
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
  exames$: Observable<Exame[]>;

  constructor(private serviceService: ServiceService, private dialog: MatDialog) {
    this.exames$ = serviceService.listExames()
    .pipe(
      catchError(error => {
      this.onError('Erro ao carregar exames.');
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

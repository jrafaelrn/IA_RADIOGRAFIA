import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Diagnosticos } from 'src/app/model/diagnostico';
import { Diagnosticojson } from 'src/app/model/diagnosticos';
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
  diagnosticos: any;

  constructor(private serviceService: ServiceService, private dialog: MatDialog) {
    this.serviceService.listDiagnosticos().subscribe(res => this.diagnosticos = res.diagnosticos)
    
   }

  ngOnInit(): void {}

  onError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: message
    });
  }
}

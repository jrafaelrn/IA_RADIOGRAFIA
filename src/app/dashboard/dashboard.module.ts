import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { CadastrarPacienteComponent } from './cadastrar-paciente/cadastrar-paciente.component';
import { CadastrarDiagnosticoComponent } from './cadastrar-diagnostico/cadastrar-diagnostico.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { ListaExamesComponent } from './lista-exames/lista-exames.component';
import { ListaDiagnosticosComponent } from './lista-diagnosticos/lista-diagnosticos.component';
import { AdicionarExameComponent } from './adicionar-exame/adicionar-exame.component';
import { SharedModule } from '../shared/SharedModule';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ResultadoComponent,
    CadastrarPacienteComponent,
    CadastrarDiagnosticoComponent,
    ListaPacientesComponent,
    ListaExamesComponent,
    ListaDiagnosticosComponent,
    AdicionarExameComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class DashboardModule { }

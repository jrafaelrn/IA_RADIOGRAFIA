import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarExameComponent } from './adicionar-exame/adicionar-exame.component';

import { CadastrarDiagnosticoComponent } from './cadastrar-diagnostico/cadastrar-diagnostico.component';
import { CadastrarPacienteComponent } from './cadastrar-paciente/cadastrar-paciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaDiagnosticosComponent } from './lista-diagnosticos/lista-diagnosticos.component';
import { ListaExamesComponent } from './lista-exames/lista-exames.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { ResultadoComponent } from './resultado/resultado.component';



const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: 'adicionar-exame', component: AdicionarExameComponent},
  {path: 'lista-pacientes', component: ListaPacientesComponent},
  {path: 'lista-exames', component: ListaExamesComponent},
  {path: 'lista-diagnosticos', component: ListaDiagnosticosComponent},
  {path: 'cadastrar-paciente', component: CadastrarPacienteComponent},
  {path: 'cadastrar-diagnostico', component: CadastrarDiagnosticoComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

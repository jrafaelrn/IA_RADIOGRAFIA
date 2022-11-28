import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Diagnosticos } from '../model/diagnostico';
import { Diagnosticojson } from '../model/diagnosticos';
import { Exame } from '../model/exame';
import { Login } from '../model/login';
import { Pessoa } from '../model/pessoa';
import { Pessoas } from '../model/pessoas';
import { Radiografias } from '../model/radiografias';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API_PESSOAS = '/buscarPacientes';
  private readonly API_DIAGNOSTICOS = '/buscarDiagnostico?crm=';
  private readonly API_EXAMES = '/buscarRadiografias?crm=';
  private readonly API_PACIENTE = '/cadastrarPaciente';
  private readonly API_DIAGNOSTICO = '/cadastrarDiagnostico';
  private readonly API_RADIOGRAFIA = '/cadastrarRadiografia';
  private readonly API_BUSCAR_RADIOGRAFIA = '/buscarDeteccao?id=';


  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public login(request: string): Observable<Login> {
    console.log(environment.medicoLogin+request)
    return this.httpClient.get<Login>(environment.medicoLogin+request).pipe(
      tap((loginResponse) => (this.authService.login = loginResponse))
    );
  }

  savePessoa(record: Pessoa) {
    console.log(record);
    return this.httpClient.post<Pessoa>(this.API_PACIENTE, record).pipe(first());
  }

  saveDiagnostico(record: Diagnosticojson) {
    console.log(record);
    return this.httpClient.post<Diagnosticojson>(this.API_DIAGNOSTICO, record).pipe(first());
  }

  saveRadiografia(record: Exame) {
    console.log(record);
    return this.httpClient.post<Exame>(this.API_RADIOGRAFIA, record).pipe(first());
  }

  public salvarSessionStorage(login: Login){
    sessionStorage.setItem("crm", JSON.stringify(login));
  }


   logout() {
    sessionStorage.clear();
    delete sessionStorage["crm"];
  }

  public get usuarioLogado(): Login {
    let usu = sessionStorage.getItem("crm");
    return (usu ? JSON.parse(usu) : null);
  }

  public listPessoas(): Observable<Pessoas>{
    return this.httpClient.get<Pessoas>(this.API_PESSOAS).pipe(
      first(),
      tap(pessoas => console.log(pessoas))
    );
  }


  listDiagnosticos(): Observable<Diagnosticos> {
    return this.httpClient.get<Diagnosticos>(this.API_DIAGNOSTICOS+this.usuarioLogado.crm)
      .pipe(
        first(),//assim q o servidor der uma resposta eu vou utilizar e finalizar a conexao
        tap(pessoas => console.log(pessoas)));
  }

  public listExames(): Observable<Radiografias>{
    return this.httpClient.get<Radiografias>(this.API_EXAMES)
    .pipe(
      first(),
      tap(exames => console.log(exames))
    );
  }

  public radiografia(): Observable<File>{

    return this.httpClient.get<File>(this.API_BUSCAR_RADIOGRAFIA+this.consultarID)
    .pipe(
      first());
  }


  public get consultarID() {
    let usu = sessionStorage.getItem("id");
    return (usu ? JSON.parse(usu) : null);
  }

  public get consultarIDRadiografia() {
    let usu = sessionStorage.getItem("id_radiografia");
    return (usu ? JSON.parse(usu) : null);
  }

  limparId() {
    delete sessionStorage["id_radiografia"];
    delete sessionStorage["id"];
  }

  public salvarSessionID(id: number){
    sessionStorage.setItem("id", JSON.stringify(id));
  }

  public salvarSessionIDRadio(id: number){
    sessionStorage.setItem("id_radiografia", JSON.stringify(id));
  }





  
 

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { Diagnosticos } from '../model/diagnostico';
import { Exame } from '../model/exame';
import { Pessoa } from '../model/pessoas';
import { ResponseLogin } from '../model/ResponseLogin';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API_PESSOAS = '/assets/response.json';
  private readonly API_DIAGNOSTICOS = '/assets/diagnosticos.json';
  private readonly API_EXAMES = '/assets/exames.json';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public login(request: number): Observable<ResponseLogin> {
    const api = '../assets/response.json';//mudar
    return this.httpClient.get<ResponseLogin>(api).pipe(
      tap((loginResponse) => (this.authService.loginResponse = loginResponse))
    );
  }

  public salvarSessionStorage(crm: number){
    sessionStorage.setItem("crm", JSON.stringify(crm));
  }

  public listPessoas() {
    return this.httpClient.get<Pessoa[]>(this.API_PESSOAS).pipe(
      first(),
      delay(1000),
      tap(pessoas => console.log(pessoas))
    );
  }

  public listDiagnosticos() {
    return this.httpClient.get<Diagnosticos[]>(this.API_DIAGNOSTICOS).pipe(
      first(),
      delay(1000),
      tap(diagnosticos => console.log(diagnosticos))
    );
  }

  public listExames() {
    return this.httpClient.get<Exame[]>(this.API_EXAMES).pipe(
      first(),
      delay(1000),
      tap(exames => console.log(exames))
    );
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Diagnosticos } from '../model/diagnostico';
import { Exame } from '../model/exame';
import { Login } from '../model/login';
import { Pessoa } from '../model/pessoas';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API_PESSOAS = '/assets/response.json';
  private readonly API_DIAGNOSTICOS = '/assets/diagnosticos.json';
  private readonly API_EXAMES = '/assets/exames.json';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public login(request: number): Observable<Login> {
    const api = '/assets/login.json';
    console.log(environment.medicoLogin+request)
    return this.httpClient.get<Login>(environment.medicoLogin+request).pipe(
      tap((loginResponse) => (this.authService.login = loginResponse))
    );
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
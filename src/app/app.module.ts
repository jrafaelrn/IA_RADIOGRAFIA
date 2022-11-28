import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/SharedModule';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgxMaskModule, IConfig  } from 'ngx-mask';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppMaterialModule,
    DashboardModule,
    NgxMaskModule.forRoot(),

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

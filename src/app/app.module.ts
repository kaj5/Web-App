import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from "@angular/material"
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { ApiGatewayService } from "./aws-api-gateway.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule
  ],
  providers: [ApiGatewayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

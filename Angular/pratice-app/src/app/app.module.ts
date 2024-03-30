import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAleart } from './warning-aleart/warning-aleart.component';
import { SuccessAleartComponent } from './success-aleart/success-aleart.component';

@NgModule({
  declarations: [
    AppComponent, WarningAleart, SuccessAleartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

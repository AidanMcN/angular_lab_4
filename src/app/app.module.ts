import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComonentbComponent } from './comonentb/comonentb.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentaComponent,
    ComonentbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

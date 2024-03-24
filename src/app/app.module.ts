import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { HermanoComponent } from './hermano/hermano.component';
import { StyloHermanosDirective } from './stylo-hermanos.directive';

@NgModule({
  declarations: [			
    AppComponent,
    PadreComponent,
    HijoComponent,
    HermanoComponent,
    StyloHermanosDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

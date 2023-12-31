import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PokemonTemplateFormComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, PokemonBaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

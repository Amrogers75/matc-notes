import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './character-detail.component'

import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, CharacterDetailComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

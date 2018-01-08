import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestLibraryModule } from 'ngx-cli-library';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  Is2ndArrayHasItemsSquare1stArrayItemsService,
  IsAnagramStringService,
} from './frequency-counter';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule],
  providers: [
    Is2ndArrayHasItemsSquare1stArrayItemsService,
    IsAnagramStringService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LeafletModule} from "@asymmetrik/ngx-leaflet";

import { AppComponent } from './app.component';
import { TrackerComponent } from './containers/tracker/tracker.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

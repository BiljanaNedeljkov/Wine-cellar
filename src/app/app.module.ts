import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WineListComponent,
    EditWineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

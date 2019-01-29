import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';
import { HomeComponent } from './wine/home/home.component';
import { AboutComponent } from './wine/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'wines', component: WineListComponent},
  {path: '', redirectTo: 'wines', pathMatch: "full"}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WineListComponent,
    EditWineComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

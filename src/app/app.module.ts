import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ProfileService } from './services/profile.service';
import { MessageService } from './services/message.service';
// import { RoutingModule } from './routing.module';
import {Route, RouterModule, Routes} from '@angular/router';
import {RoutingModule} from './routing.module';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ImageUploadModule} from 'angular2-image-upload';

// @ts-ignore
const  routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpModule, FormsModule, ImageUploadModule.forRoot()  ],
  providers: [ProfileService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

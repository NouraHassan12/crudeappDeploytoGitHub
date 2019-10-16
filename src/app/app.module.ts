import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UserComponent } from './Components/user/user.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  
   
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

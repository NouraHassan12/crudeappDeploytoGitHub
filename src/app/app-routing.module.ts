import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UserComponent } from './Components/user/user.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'user' , component:UserComponent},
  {path:'user/:id' , component:UserComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

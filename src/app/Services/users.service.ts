import { Injectable } from '@angular/core';
import { User } from '../Shared/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users:Array<User> =[
  {
    name:'Mohamed',
    title:'Engineer'
  },

  {
    name:'Ahmed',
    title:'Doctoe'
  },

  {
    name:'Mostafa',
    title:'Accountant'
  },



]
  constructor() { }

  deleteUser(i){
    this.users.splice(i , 1)
  }


  saveUser(name , title){
this.users.push({
  name:name ,
  title:title
})
  }



  editUser(i , data){
this.users[i] =  data
  }
}

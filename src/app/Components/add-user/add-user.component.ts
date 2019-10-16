import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userservice :UsersService , private router :Router,
    private title:Title) {
      this.title.setTitle('Add New User')
     }

  ngOnInit() {
  }

  saveUser(name , title){
this.userservice.saveUser(name.value , title.value)
this.router.navigate(['/'])
  }

}

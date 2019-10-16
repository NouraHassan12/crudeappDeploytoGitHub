import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userservice:UsersService , private title:Title) {
    this.title.setTitle('User List')
   }

  ngOnInit() {
  }

  deleteUser(i){
    this.userservice.deleteUser(i)

  }

}

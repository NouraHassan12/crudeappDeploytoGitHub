import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userid;
  user;
  constructor(private userservice :UsersService,
    private route:ActivatedRoute, private router:Router ,private title:Title) { 
       this.title.setTitle('Edit User')
    }

  ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get('id')
    this.user =this.userservice.users[this.userid]
  }


  saveUser(){
this.userservice.editUser(this.userid , this.user)
this.router.navigate(['/'])
  }


  deleteUser(){
    this.userservice.deleteUser(this.userid)
    this.router.navigate(['/'])
  }

}

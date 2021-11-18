import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  this.userService.getAll().subscribe((data: any)=>{
    console.log(data);
   this.users=data;
  });


  }

  userDetails(id: any) {
    this.router.navigate(['single-user', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup ;
  error: any;


  constructor(private router: Router) { }




  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, {
        validators:[
          Validators.required,
          Validators.minLength(3)
        ]
      }),
      password: new FormControl(null, {
        validators:[
          Validators.required,
          Validators.minLength(3)
        ]
      })


    });
  }

  onSubmit(a: any, b: any){
    if(this.form.invalid){
      return;
    } else {
      if((a == 'admin')&&(b == '12345')){
    this.router.navigate(['/registration']);
      } else {
        this.error = "Username or Password is incorrect!!"
      }
    }
  }

}

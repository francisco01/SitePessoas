import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmit() {
    console.log("1t",this.form);
 
    this.signupInfo = new SignUpInfo(
      this.form.userName,
      this.form.senha);
      console.log("2t",this.signupInfo);
 
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        //console.log("2",data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        console.log("3");
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  


}

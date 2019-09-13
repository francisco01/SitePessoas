import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
    }
  }

  onSubmit(){
    console.log("form", this.form);
 
    this.loginInfo = new AuthLoginInfo(
      this.form.userName,
      this.form.senha);
      //console.log("loginForm", this.loginInfo);
 
    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.userName);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
        //console.log("teste", data);
       
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}

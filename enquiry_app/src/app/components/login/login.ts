import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../../services/toaster.service';
import { Common } from '../../services/common';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit {
  router = inject(Router)
  commonSvc = inject(Common);
  private readonly toaster = inject(ToasterService);
  userLogin = {
    email:'',
    password:''
  }
  constructor(){
    localStorage.clear();
  }

  ngOnInit(): void {
    this.commonSvc.$userLog.next();
  }
  onLogin(){
    if(this.userLogin.email == 'admin' && this.userLogin.password == '123'){
      localStorage.setItem("enquiryApp", this.userLogin.email)
      this.commonSvc.$userLog.next();
      this.router.navigateByUrl('/status')
      // this.toaster.show("Signed-in Successfully", 'success', 'Sign-in');
    }else{
      this.toaster.show('The email address or password is incorrect.', 'error', 'Sign-in failed');
    }
  }

  onLogout(){
    localStorage.clear();
    this.commonSvc.$userLog.next();
  }

}

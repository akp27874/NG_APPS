import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../../services/toaster.service';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  router = inject(Router)
  private readonly toaster = inject(ToasterService);
  userLogin = {
    email:'',
    password:''
  }
  onLogin(){
    if(this.userLogin.email == 'admin' && this.userLogin.password == '123'){
      this.toaster.show("Signed-in Successfully", 'success', 'Sign-in');
      this.router.navigateByUrl('status')
    }else{
      this.toaster.show('The email address or password is incorrect.', 'error', 'Sign-in failed');
    }
  }


}

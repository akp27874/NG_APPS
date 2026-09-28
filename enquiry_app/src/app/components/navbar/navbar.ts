import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Common } from '../../services/common';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  commonSvc = inject(Common);
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
  isAdmin: boolean = false;
  constructor(){
    this.verifyAdminLogin();
    this.commonSvc.$userLog.subscribe({
      next: ()=>{
        this.verifyAdminLogin();
      }
    })
  }

  verifyAdminLogin(){
    const admin = localStorage.getItem("enquiryApp");
    if(admin != null){
      this.isAdmin = true;
    }
  }
  signOut(){
    this.isAdmin = false;
    localStorage.clear()
    this.commonSvc.$userLog.next()
  }
}

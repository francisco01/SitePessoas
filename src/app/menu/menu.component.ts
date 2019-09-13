import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../home/auth/token-storage.service';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;
  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    if (this.token.getToken()){
      this.isLogged = true;
    }
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }

}

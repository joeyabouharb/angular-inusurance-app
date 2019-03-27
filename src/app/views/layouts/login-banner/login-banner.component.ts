import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login-banner',
  templateUrl: './login-banner.component.html',
  styleUrls: ['./login-banner.component.scss']
})
export class LoginBannerComponent implements OnInit {
  isAuthenticated$: boolean;
  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
   this.isAuthenticated$ = this.userService.isAuthenticated();

   if (this.isAuthenticated$ === true) {
     this.router.navigate(['/claim/list']);
   }

  }

}

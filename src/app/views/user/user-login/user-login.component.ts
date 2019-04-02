import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { LoginForm } from '../../../shared/models/login-form';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  credentials = new LoginForm('', '');

  constructor(
    private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.userService.userLogin(this.credentials).subscribe((data: any) => {
      this.userService.setToken(data);
    });

    setTimeout(() => {
      this.userService.login();
    }, 1000);
    }
  }


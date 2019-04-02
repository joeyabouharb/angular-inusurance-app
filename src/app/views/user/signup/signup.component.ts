import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { LoginForm } from 'src/app/shared/models/login-form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = new User('', '', 'USER', '');
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.userService.registerUser(this.user).subscribe(data => console.log(data));

    this.router.navigateByUrl('/user/login');

  }
}

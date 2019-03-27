import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Simple Claims Inusurance';
  isAuthenticated$: boolean;
  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onLogout() {
    this.userService.clear();
    setTimeout(() => {this.userService.logout(); }, 1000);

  }
  handleResponsiveNavClick(event: Event) {
    const element = document.getElementById('nav-menu-trigger');
    if (element.className === 'nav-menu') {
      element.className += ' responsive-view';
    } else {
      element.className = 'nav-menu';
    }
  }
}

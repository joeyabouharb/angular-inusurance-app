import { Component, OnInit, Input } from '@angular/core';
import { ClaimsService } from '../../../shared/services/claims.service';
import { DataStateService } from '../../../shared/services/data-state.service';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.scss']
})
export class ClaimListComponent implements OnInit {
  claims: Array<any>;


  getClaimInfo(id: number): void {
    this.stateService.setClaim(this.claims.find(claim => {
      return claim.id === id;
    }));
    this.router.navigateByUrl(`claim/details/${id}`);
  }

  constructor(private user: UserService, private claimsService: ClaimsService,
              private stateService: DataStateService, private router: Router) {}

  ngOnInit() {
    if (this.user.getToken() === null) {
      this.router.navigateByUrl('/');
    }
    this.claimsService.getAllClaims().subscribe(data => {
      this.claims = data;
    });
  }

}

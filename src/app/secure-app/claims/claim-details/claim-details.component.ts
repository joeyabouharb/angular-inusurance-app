import { Component, OnInit } from '@angular/core';
import { DataStateService } from '../../../shared/services/data-state.service';
import { ClaimsService } from '../../../shared/services/claims.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.scss']
})
export class ClaimDetailsComponent implements OnInit {
  claim: any;
  id: number;
  constructor(private stateService: DataStateService, private claimService: ClaimsService,
              private user: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.user.getToken() === null) {
      this.router.navigateByUrl('/');
    }
    this.claim = this.stateService.getClaim();
    if (this.claim === false) {
     this.route.params.subscribe(params => this.id = +params.id);
     this.claimService.getAllClaims().subscribe(data => {
       this.claim = data.find(claim => claim.id === this.id);
     });
   }

  }

}

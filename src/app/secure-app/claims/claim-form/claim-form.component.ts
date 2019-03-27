import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Claim } from '../../../shared/models/claim';
import { ClaimsService } from '../../../shared/services/claims.service';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.scss']
})
export class ClaimFormComponent implements OnInit {
  claimType = ClaimType;
  policyType = PolicyType;

  claim: Claim = new Claim(0, '', '', '', '', 'In Progress');

  constructor(private user: UserService, private claimService: ClaimsService, private route: Router) { }

  ngOnInit() {
    if (this.user.getToken() === null) {
      this.route.navigateByUrl('/');
    }
  }

  onSubmit() {
    if (this.claim.details === '' ||
       this.claim.claim === '' ||
       this.claim.incidentDate === '' ||
       this.claim.policy === '') {
         alert('please fill out claim details...');
         return;
       }
    console.log(this.claim);
    this.claimService.newClaim(this.claim).subscribe(() => this.route.navigateByUrl('/claim/list'));
  }
}
@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data) {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }
}
export enum ClaimType {
  Car,
  House,
  Health,
}
export enum PolicyType {
  Basic,
  Standard,
  Family,
  Buisness,
}

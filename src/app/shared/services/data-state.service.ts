import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStateService {

  claim: any | boolean = false;
  constructor() { }

  public getClaim(): any | boolean {
    return this.claim;
  }

  public setClaim(claim: any): void {
    this.claim = claim;
  }
}

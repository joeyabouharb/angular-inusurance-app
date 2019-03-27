import { CompileTemplateMetadata } from '@angular/compiler';

export class Claim {


  constructor(
    public id: number,
    public claim: string,
    public policy: string,
    public details: string,
    public incidentDate: string,
    public status: string
  ) {}
}

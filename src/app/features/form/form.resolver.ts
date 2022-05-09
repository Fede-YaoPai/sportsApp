import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormService } from 'src/app/core/services/form.service';
import { FormSelects } from 'src/app/models/form.models';

@Injectable({
  providedIn: 'root'
})
export class FormResolver implements Resolve<FormSelects> {

  constructor(private service: FormService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<FormSelects> {
    return this.service.getFormSelectOptions();
  }
}

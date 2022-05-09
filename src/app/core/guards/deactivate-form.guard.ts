import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from 'src/app/features/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateFormGuard implements CanDeactivate<FormComponent> {
  canDeactivate(
    component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let result: boolean | UrlTree = true;

    if (!component.formSaved()) {
      result = confirm('Are you sure you want to leave this form without saving?')
    }

    return result;
  }

}

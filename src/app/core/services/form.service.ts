import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormSelects } from 'src/app/models/form.models';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  public getFormSelectOptions(): Observable<FormSelects> {
    return this.http.get<FormSelects>('https://60d340e6858b410017b2f4b9.mockapi.io/api/formselects');
  }
}

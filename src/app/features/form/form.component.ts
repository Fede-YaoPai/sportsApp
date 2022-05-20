import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormSelects } from 'src/app/models/form.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public selects!: FormSelects;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.setFormSelects()
  }

  private setFormSelects(): void {
    // let selects: FormSelects = this.route.snapshot.data['formSelects'][0];
    // this.selects = selects;
  }

  public formSaved(): boolean {
    return false;
  }

}

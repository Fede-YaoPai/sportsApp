import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public registrationForm!: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initRegistrationForm();
  }

  // private initRegistrationForm(): void {
  //   this.registrationForm = new FormGroup({
  //     username: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required])
  //   });
  // }

  private initRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      username: ['', {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      email: ['', {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      password: ['', {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],

      address: this.fb.group({
        country: [''],
        city: [''],
        street: [''],
        number: ['']
      })
    });
  }

  public onSubmit(form: FormGroup) {
    // let newUser: User = this.getUserInitialState();

    // for (let key in newUser) {
    //   newUser[key as keyof User] = form.controls[key].value;
    // }

    // this.userService.addNewUser(newUser)
    //   .subscribe((u: User) => console.log('added user: ', u));
  }

  // private getUserInitialState(): User {
  //   const newUser: User = {
  //     username: '',
  //     email: '',
  //     password: ''
  //   }

  //   return newUser;
  // }

}

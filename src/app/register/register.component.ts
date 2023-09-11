import { Component } from '@angular/core';
import{FormBuilder,FormGroup, FormControl,
  Validators, } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup;
  constructor(private fb: FormBuilder) {
      this.registerForm= this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
    password: ['',  [Validators.required, Validators.minLength(8), Validators.pattern( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]+$/)]],
    confirmPassword: ['', [Validators.required]],
   
  });
}
SubmitRegisterForm() {
  console.log(this.registerForm);
}

}

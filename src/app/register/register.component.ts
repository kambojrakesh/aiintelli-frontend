import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private userService: UserService,
              private formBuilder: FormBuilder) {  }

  registerForm: FormGroup;
  loading = false;
  isInvalidRegister = false;
  errorMessage = "Please Submit form properly!!";
  submitted = false;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  username: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.username = new FormControl('', Validators.required);
  }

  createForm() {
    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      username: this.username
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.registerForm.invalid) {
      this.isInvalidRegister = true;
      return;
    }
    let registerValue = JSON.stringify(this.registerForm.value);

   // this.registerForm.patchValue({
     let registerValue1 = [{
    'userRoles': [],
    'credentialsNonExpired':true,
    'accountNonExpired':true,
    'authorities':[],
    'enabled':true,  
    'accountNonLocked':true }];

      //registerValue.concat(registerValue1);

      var val= $.extend(registerValue, registerValue1 );

    //registerValue = registerValue.concat(registerValue1);
    console.log(val)

    const httpBody = new HttpParams()
      .set('signup_user', val)
      .set('singup_role', '{"userRoles":[],"roleId":1,"name":"ROLE_USER"}');

    console.log(httpBody);


    // this.userService.register(httpBody).subscribe(
    //   data => {
    //     this.router.navigate(['login'])
    //     this.errorMessage= "Submitted Successfully!";
        
    //     this.isInvalidRegister = true;
    //     this.registerForm.reset;
    //   },
    //   error => {
    //     this.errorMessage = error.message
    //     this.loading = false;
    //     this.isInvalidRegister = true;
    //   }
    // )

  }
}

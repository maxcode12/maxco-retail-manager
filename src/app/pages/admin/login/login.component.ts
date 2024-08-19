import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Authenticate } from '../../../../entities/authenticate';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
 
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;

private Login: Authenticate = new Authenticate();
@Input() 
set login(value: Authenticate) {
  this.Login = value;
}

@Input()
set hasError(value: boolean) {
  if (value) {
    this.loginForm.setErrors({invalid: true});
  }
}

@Output() formError = new EventEmitter();
@Output() loginSubmit = new EventEmitter();

get username(): AbstractControl | null {
  return this.loginForm.get('username');
}

get password(): AbstractControl | null {
  return this.loginForm.get('password');
}

constructor(private fb: FormBuilder,
   private http: HttpClient, private router: Router) {
    this.loginForm = new FormGroup({  
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
 }
 
 


  ngOnInit(): void {
   
    
  }

   

  onLogin() {  
      this.http.post('https://localhost:7064/api/Auth/login', this.login).subscribe((res: any) => {
        if (res.result) {
         alert('Login Success');
         this.router.navigate(['/admin/dashboard']);
        }else{ alert('Login Failed');}
       
      });
      console.log(this.loginForm.value);
    
  }
}
  


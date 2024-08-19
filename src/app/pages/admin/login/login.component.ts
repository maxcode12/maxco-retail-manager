import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Authenticate } from '../../../../entities/authenticate';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
 
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
errorMessage: string = '';

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

get email(): AbstractControl | null {
  return this.loginForm.get('email');
}

get password(): AbstractControl | null {
  return this.loginForm.get('password');
}

constructor(private fb: FormBuilder,
   private router: Router,
  private service: AuthenticationService) {
    this.loginForm =this.fb.group({  
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
 }
 
 


  ngOnInit(): void {
   
    
  }

  onLogin() {  
    this.service.loginPost(this.loginForm.value).subscribe({
      next: (response)=>{
        if (response) {
          alert('Login Success');
          this.router.navigate(['/dashboards']);
        }else{
         
          alert('Login Failed');
          error:(err: any) =>{

            this.errorMessage = 'Invalid username or password';
            console.log('Login failed',err);
            this.formError.emit(true);
          }
        }

      }
    });

      console.log(this.loginForm.value);
    
  }
}
  


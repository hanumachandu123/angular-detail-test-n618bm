import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "./login.service"
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService:LoginService,
    private router: Router,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      if(username=="test"&&password=="test"){
        this.router.navigate(['/home']);
      } else{
        this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Please enter valid credentials..!' });
      }

      // this.loginService.login(username, password).subscribe((loggedIn: boolean) => {
      //   if (loggedIn) {
      //     console.log('Login successful!');
      //   } else {
      //     console.log('Login failed! Invalid credentials.');
      //   }
      // });
    }
  }

  
  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!field?.invalid && (field?.touched || field?.dirty);
  }

}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ManagmentTokenService } from '../service/managment-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  forminput!: FormGroup
  constructor(private fb: FormBuilder, private router: Router,
    private authService:AuthService,private tokenManagement:ManagmentTokenService)  { }

  ngOnInit(): void {
    this.forminput = this.fb.group(
      {
        'email': ['', [Validators.required, Validators.email]], //validation regx
        'password': ['', Validators.required]
      }
    )
  }
  login() {
    console.log(this.forminput.value)
    if(this.forminput.valid){}
    this.authService.login(this.forminput.value).subscribe(
      {next: (data: any) => {
        this.tokenManagement.saveToken(data.token)
        this.router.navigate(['/dashboard']);
            
    },
    error: (err: any) => {
    }})
  }
  
}

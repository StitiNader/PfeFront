import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required,Validators.min(8),Validators.max(12)]),
  });
  constructor(private router: Router , private authService:AuthService) { }

  ngOnInit(): void {
  }

  registre() {
    if(this.form.valid){
      this.authService.registry(this.form.value).subscribe(
        {next: (data: any) => {
        //resultat lié b backend(api répondu avec succés)
        this.router.navigate(['/login']);
              
      },
      error: (err: any) => {
      }})
    }
   
  }
  
}

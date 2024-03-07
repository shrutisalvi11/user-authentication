import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor( private fb: FormBuilder, public authService:AuthService,private router: Router) { } 

  ngOnInit(): void {
   this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  
  }


  public fetchControl(name) {
    return this.loginForm.get(name);
  }

  loginUser(){
      let data = {
        username: this.fetchControl('username').value,
        password: this.fetchControl('password').value
      }
    this.authService.login(data).subscribe((res: any) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfully!!",
        showConfirmButton: false,
        timer: 1500
      });
      sessionStorage.setItem('username', res.data.username); 
      sessionStorage.setItem('token', res.data.token); 
      this.authService.fetchData();
      this.router.navigate(['/home'])

    }, err => {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.error.message,
        showConfirmButton: false,
        timer: 1500
      });
      if(err.error.message == 'User does not exist!') this.router.navigate(['/register'])

  })

  }

}

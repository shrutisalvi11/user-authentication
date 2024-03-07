import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  reistrationForm:any;

  constructor(private fb: FormBuilder, public authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.reistrationForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }


  public fetchControl(name) {
    return this.reistrationForm.get(name);
  }

  registerUser(){
      let data = {
        name: this.fetchControl('name').value,
        username: this.fetchControl('username').value,
        password: this.fetchControl('password').value
      }
    this.authService.registration(data).subscribe((res: any) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Register Successfully!!",
        showConfirmButton: false,
        timer: 1500
      });
      sessionStorage.setItem('token', res.data.token); 
      this.authService.fetchData();
      this.router.navigate(['/home'])
     
    }, err => {
      console.log('Something went wrong! Try again'); 
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.error.message,
        showConfirmButton: false,
        timer: 1500
      });   
    })
  }


}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData:any;
  spinner:any=true;

  constructor(private authService:AuthService,private router: Router) { 
  }

  ngOnInit(): void {
      this.authService.userData$.subscribe((data: any) => { // Subscribe to the BehaviorSubject
        this.spinner = false;
        this.userData = data; // Assign the fetched data to the component variable
        console.log(this.userData,'inside home')
      });    
   }


  logout(){
    sessionStorage.clear(); //remove user data from session storage
    this.router.navigate(['/login'])
  }


}

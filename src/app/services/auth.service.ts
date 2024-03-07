import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'; // Import BehaviorSubject for asynchronous data sharing
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userDataSubject = new BehaviorSubject<any>(null); // Create a BehaviorSubject

  constructor(private http: HttpClient,) { }

  login(data) {
    return this.http.post(`http://172.16.1.40:3000/api/auth`, data);
  }

  registration(data) {
    return this.http.post(`http://172.16.1.40:3000/api/create-user`, data);
  }

  getUserDetails() {
    return this.http.get(`http://172.16.1.40:3000/api/get-details`, { headers: new HttpHeaders().set("Authorization", sessionStorage.getItem("token")!) });
  }

  fetchData() { // Renamed function for clarity
    this.getUserDetails().subscribe((res: any) => {
      this.userDataSubject.next(res.data); // Update the BehaviorSubject with fetched data
    }, err => {
      console.log(err, 'Something went wrong! Try again');
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.error.message,
        showConfirmButton: false,
        timer: 1500
      });   
    });
  }

  get userData$() { // Expose the BehaviorSubject as an observable
    return this.userDataSubject.asObservable();
  }
}






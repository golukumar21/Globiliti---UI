import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GlobilitiService {
  private globilitiDashboard = environment.GLOBILITI;
  setUserInitials = new Subject();
  constructor(private http: HttpClient, private router: Router) {}

  setUserShortName(val: any) {
    this.setUserInitials.next(val);
  }

  public register(data: any) {
    return this.http.post(this.globilitiDashboard.register, data);
  }

  public login(data: any) {
    return this.http.post(this.globilitiDashboard.login, data, {
      observe: 'response',
    });
  }

  public logout() {
    this.router.navigate(['/']);
    this.clearLocalStorage();
  }

  public userDetails() {
    var data = new FormData();
    let token: any = this.getLocalStorage('token');
    let headers = new HttpHeaders({
      'X-Auth-Token': token,
    });
    let options = { headers: headers };
    // return this.http.get(this.internalDashboardURL.userDetails, options);
  }

  public setLocalStorage(name: any, value: any) {
    localStorage.setItem(name, value);
  }

  public getLocalStorage(name: any) {
    return localStorage.getItem(name);
  }

  public removeLocalStorage(name: any) {
    localStorage.removeItem(name);
  }

  public clearLocalStorage() {
    localStorage.clear();
  }
}

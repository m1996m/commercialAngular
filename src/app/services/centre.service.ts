import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CentreModel } from '../Models/centre-model.Model';

@Injectable({
  providedIn: 'root'
})
export class CentreService {
  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  constructor(private http:HttpClient ) { }

  getAllCentre() {
    return this.http.get(this.global , this.httpOptions);
  }
  createCentre(centre:CentreModel) {
    return this.http.post(this.global+'centre/new',centre, this.httpOptions);
  }

  verificationUniciteEmail(email:CentreModel) {
    return this.http.get(this.global+'verificationUniciteEmail', this.httpOptions);
  }

  verificationUniciteTEl(tel:CentreModel) {
    return this.http.get(this.global+'verificationUniciteTelCentre', this.httpOptions);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentreService {
  global = 'http://127.0.0.1:8000/getOneCentre/1';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  constructor(private http:HttpClient) { }

  getAllCentre(){
    return this.http.get(this.global);
  } 
}

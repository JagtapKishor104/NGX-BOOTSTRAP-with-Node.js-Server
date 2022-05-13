import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url ="http://localhost:5000/employee";
  //  "https://reqres.in/api/users?page=2";

  public getuser(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  posturl="http://localhost:5000/employee"; 

  public postusers(data:any):Observable<any>
  {
    return this.http.post(`${this.posturl}`,data)
  }

  updateurl="http://localhost:5000/employee";

  public updateusers(_id:any,data:any):Observable<any>
  {
    return this.http.put(`${this.updateurl}/${_id}`,data)
  }

  deleteurl = "";

  public deleteuser(id: any): Observable<any> {
    return this.http.delete(`${this.deleteurl}/${id}`);
  }


  get_id()
  {
    return localStorage.getItem("_id");
  }

}

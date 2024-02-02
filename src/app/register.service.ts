import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerUser(data:any){
    return this.http.post('http://localhost:3000/user',data);
     
   }

   userList(){
    return this.http.get('http://localhost:3000/user');
  }

  getSpecificUser(id:string){
    return this.http.get(`http://localhost:3000/user/${id}`);
  }

  
  updateUser(data:any){
    return this.http.put(`http://localhost:3000/user/${data.id}`,data)
  }
}

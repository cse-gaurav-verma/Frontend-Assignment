import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { platziusertype } from '../../types/platziusertype';
import { loginuser } from '../../types/loginuser';

@Injectable({
  providedIn: 'root',
})
export class Http {
  httpClient = inject(HttpClient)
  baseUrl = 'https://api.escuelajs.co/api/v1/users';
  loginur = 'https://api.escuelajs.co/api/v1/auth';
  getUsers(){
    return this.httpClient.get(this.baseUrl)
  }
  adduser(user:platziusertype){
    return this.httpClient.post(this.baseUrl, user)
  }
  loginuser(userc : loginuser){
    return this.httpClient.post(`${this.loginur}/login`, userc)
  }
}

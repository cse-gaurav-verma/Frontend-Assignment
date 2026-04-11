import { Component, OnInit, inject, signal } from '@angular/core';
import {Http as HttpService} from '../../app/services/http'
import { JsonPipe } from '@angular/common';
import { gitusertype } from '../../types/githubUseers';
import { platziusertype } from '../../types/platziusertype';
@Component({
  selector: 'app-http',
  imports: [JsonPipe],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http implements OnInit {
  httpData = inject(HttpService)
  userData = signal<gitusertype[]>([]);
  ngOnInit(){
    this.httpData.getUsers().subscribe({
      next : (data:any)=>{
        console.log(data);
        this.userData.set(data);
      },
      error:(errmsg)=>{
        console.log(errmsg);
      },
      complete:()=>{
        console.log("data fetch complete");
      }
    })
  }
  user:platziusertype = {
    name:'Gautam',
    email: 'gaurav@gmail.com',
    password: '1234567890',
    avatar:'https://www.freepik.com/free-photos-vectors/girl-avatar'
  }
  adduser(){
    this.httpData.adduser(this.user).subscribe({
      next: (data)=>{
        console.log(data);
      },
      error:(errmsg)=>{
        console.log(errmsg);
      },
      complete:()=>{
        console.log("data post complete");
      }
    })
  }
  loginUserC = {
    email: 'john@mail.com',
    password: 'changeme'
  }
  login(){
    this.httpData.loginuser(this.loginUserC).subscribe({
      next: (data)=>{
        console.log("Login successful:", data);
      },
      error:(errmsg)=>{
        console.log("Login error:", errmsg);
      },
      complete:()=>{
        console.log("login complete");
      }
    })
  }
}

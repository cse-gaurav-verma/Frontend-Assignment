import { Injectable } from '@angular/core';

export interface UserType {
  name: string;
  role: string;
  imgurl: string;
}

@Injectable({
  providedIn: 'root',
})
export class User {
  userData: UserType[] = [{
    name: 'abasd',
    role: 'sdfg',
    imgurl: 'sdfgf'
  }]

  addUser(user: UserType) {
    this.userData.push(user)
    console.log(this.userData);
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../services/user';

@Component({
  selector: 'app-adduser',
  imports: [MatFormFieldModule,FormsModule],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser {
  userData = {
    name: '',
    role: '',
    imgurl: ''
  }
  userService = inject(User)

  handlesubmit() {
    console.log(this.userData);
    this.userService.addUser(this.userData);
    // Reset form
    this.userData = {
      name: '',
      role: '',
      imgurl: ''
    }
  }
}

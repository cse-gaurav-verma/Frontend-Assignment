import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})
export class Reactiveform {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.minLength(8),Validators.required]),
    confirmpass : new FormControl('',[Validators.required]),
    currency : new FormControl(),
    gender : new FormControl(),
    tandc : new FormControl(),
    skills : new FormArray([])
  })

  handlepass(){
    const password = this.loginForm.get('password')?.value;
    const confirmpass = this.loginForm.get('confirmpass')?.value;
    
    if (password === confirmpass) {
      console.log('Passwords match!');
    } else {
      console.log('Passwords do not match!');
    }
  }
  
  handlesubmit(){
    console.log(this.loginForm.value);
    console.log(this.loginForm);
    
  }
  public get skills(){
    return this.loginForm.get('skills') as FormArray;
  }

  handleCb(event: Event){
    console.log(event);
    let html = event.target as HTMLInputElement
    if (html.checked) {
      this.skills.push(new FormControl(html.value))
    }else{
      let index = this.skills.value.indexOf(html.value);
      if (index > -1) {
        this.skills.removeAt(index);
      }
    }
  }
}

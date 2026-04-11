import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Childcomp } from "./childcomp/childcomp";
import { NgClass, NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-first-comp',
  imports: [FormsModule, Childcomp, NgClass,NgIf, NgFor],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  // names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];
  // currentIndex: number = 0;

  // ipval:string = ''
  // name:string = "gaurav";
  // style :string = `color:red;`
  // isHidden:boolean = false;
  
  // click(){
  //   this.isHidden =!this.isHidden
  // }
  
  // prev(){
  //   this.currentIndex = (this.currentIndex - 1 + this.names.length) % this.names.length;
  // }

  // next(){
  //   this.currentIndex = (this.currentIndex + 1) % this.names.length;
  // }

  // get currentName(): string {
  //   return this.names[this.currentIndex];
  // }

//   name: string = 'THis is name given'
//   d : string = ''
//   handleData(data:any){
//     this.d = data
//     console.log(data);
    
//   }
// }
//  applyclass:boolean = false
//  shouldApply(){
//   this.applyclass = !this.applyclass
//  }
// }
arr:number[] = [1,2,3,4,5];
users = [
    { id: 1, name: 'Tanishq' },
    { id: 2, name: 'Gaurav' },
    { id: 3, name: 'Mohit' }
  ];
}
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  displayedColumns: string[] = ['id', 'name', 'age', 'qualification'];
  
  data = [{
    id: 1,
    name: 'asdf',
    age: '51',
    qualification: "ug"
  },
  {
    id:2,
    name: 'asfdsdf',
    age: '51',
    qualification: "ug"
  },
  {
    id:3,
    name: 'ashjhebddf',
    age: '51',
    qualification: "ug"
  },
]
}
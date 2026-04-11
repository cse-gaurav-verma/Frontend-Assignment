import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reactiveform } from "./reactiveform/reactiveform";
import { Http } from './http/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Reactiveform, Http],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactive-forms');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './comp/form-component/form-component';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormComponent,User],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task');
}

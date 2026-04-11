import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../services/user';

@Component({
  selector: 'app-display',
  imports: [CommonModule, MatCardModule],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  userService = inject(User);
}

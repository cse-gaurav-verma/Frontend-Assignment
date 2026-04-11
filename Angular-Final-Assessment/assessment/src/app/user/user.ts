import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../services/service';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  api = inject(HttpService);
  users: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  ngOnInit() {
    this.api.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load users';
        this.isLoading = false;
      }
    });
  }
}
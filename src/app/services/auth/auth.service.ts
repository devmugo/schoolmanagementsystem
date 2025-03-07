import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient , private router : Router) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, { username, password });
  }

  setToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  clearToken() {
    localStorage.removeItem('jwtToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  logout(): void {
    localStorage.removeItem('jwtToken');  // Clear token or user data
    this.router.navigate(['/login']);   // Redirect to login page
  }


  getUserRoles(): string[] {
    const token = this.getToken();
    if (!token) {
      return [];
    }
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.roles || [];
    } catch (error) {
      console.error('Failed to decode token', error);
      return [];
    }
  }

  hasRole(role: string): boolean {
    return this.getUserRoles().includes(role);
  }

  getUserName(): string {
    const token = this.getToken();
    if (!token) {
      return "";
    }


    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.sub;
    } catch (error) {
      console.error('Failed to decode token', error);
      return "";
    }
  }

}

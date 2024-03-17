import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment.development';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  clientId!: string;
  redirectUrl!: string;
  constructor()
  {
    // Landing Page to redirect to UpStox API Login
    this.clientId = environment.apiClientId; // User specific client Id to connect with upstox api
    this.redirectUrl = environment.apiRedirectUrl; // after authorization upstox redirects back to this endpoint
  }
}

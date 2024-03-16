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
    this.clientId = environment.apiClientId;
    this.redirectUrl = environment.apiRedirectUrl;
  }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InfocardComponent } from './infocard/infocard.component';
import { LoadingComponent } from './loading/loading.component';


export const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      title: 'Login page',
    },
    {
      path: 'app',
      component: InfocardComponent,
      title: 'Stock Screener',
    },
    {
      path: 'upstox-redirect',
      component: LoadingComponent,
      title: 'Login page',
    },
  ];
  

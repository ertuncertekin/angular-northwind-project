import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';


export const authRoutes: Routes = [
    {
        path: "auth/login",
        component: LoginPageComponent
    }
];

import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { LoginPageComponent } from './routes/auth/login-page/login-page.component';
import { authRoutes } from './routes/auth/auth.routes';

export const routes: Routes = [
    {
        path: '', //path boş ise bu componenti yerleştir. ilk karşılaştığı root'a componenti yerleştir.
        component: HomePageComponent
    },
    ...authRoutes //... Spread operatörü ile farklı bir router'ı buraya aldıık. 
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    
    {path:'home' , component:HomeComponent},
    {path:'contact-us' , component:ContactusComponent},
    {path:'Login',component:LoginComponent},
    {path:'',component:LandingpageComponent},
    {path:'**',component:ErrorpageComponent}
    
];

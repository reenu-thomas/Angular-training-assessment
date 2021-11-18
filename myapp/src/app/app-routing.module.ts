import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserDetailsComponent } from './user_details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userdetails', component: UserDetailsComponent},
  { path: 'single-user/:id', component: SingleUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

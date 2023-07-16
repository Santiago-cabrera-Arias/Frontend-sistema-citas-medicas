import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

  {path: "", redirectTo:"main", pathMatch:"full"},
  {path: "main", component:  MainComponent},

  {path: "registrarse", component:  RegisterComponent},
  {path: "login", component:  LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';

const routes: Routes = [
  {path: "", redirectTo:"main", pathMatch:"full"},
  {path: "main", component:  MainComponent},

  {path: "registrarse", component:  RegisterComponent},
  {path: "login", component:  LoginComponent},
  {path: "crearServicio", component:  CrearServicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

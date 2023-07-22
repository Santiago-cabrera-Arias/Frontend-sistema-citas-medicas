import { Component } from '@angular/core';
import { ServiciosComponent } from '../servicios/servicios.component';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent {

  public servicio = {
    nombreServicio: '',
    precio: '',
    iva: '',
    cantidad: '',
    estado: ''
  }

  public showAlert = false; 

  constructor(private servicios: ServiciosService, private router: Router) { }

  form_register(){
      this.servicios.crearServicio(this.servicio).subscribe(
        (data) => {
          console.log(data);  
          this.showAlert = true; // Mostrar la alerta
        },(error) => {  
          console.log(error);
        })
  }




}

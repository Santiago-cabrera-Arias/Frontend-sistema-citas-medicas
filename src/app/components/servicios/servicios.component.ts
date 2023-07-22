import { MedicoService } from './../../services/medico.service';
import { ServicioPersonaService } from './../../services/servicio-persona.service';
import { EspecialidadesService } from './../../services/especialidades.service';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

// ... otros importaciones ...

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];
  medicos: any[] = [];
  especialidades: any[] = [];
  mostrarServiciosMedicos: string = 'servicios';

  constructor(private serviciosService: ServiciosService, private EspecialidadesService: EspecialidadesService,
    private MedicoService: MedicoService) { }

  ngOnInit(): void {
    this.obtenerTodosLibros();
    this.obtenerEspecialidades();
    this.obtenerMedicos();
  }

  obtenerTodosLibros() {
    this.serviciosService.obtenerTodosServicios().subscribe(
      (res: any[]) => {
        this.servicios = res;
        console.log(res);
      },
      (error: any) => {
        console.error('Error al obtener los servicios', error);
      }
    );
  }

  obtenerEspecialidades() {
    this.EspecialidadesService.obtenerEspecialidades().subscribe(
      (res: any[]) => {
        this.especialidades = res;
        console.log(res);
      },
      (error: any) => {
        console.error('Error al obtener las especialidades', error);
      }
    );
  }

  obtenerMedicos() {
    this.MedicoService.obtenerMedicos().subscribe(
      (res: any[]) => {
        this.medicos = res;
        console.log(this.medicos);
      },
      (error: any) => {
        console.error('Error al obtener la lista de médicos', error);
      }
    );
  }

  mostrarServicios() {
    this.mostrarServiciosMedicos = 'servicios';
  }

  mostrarMedicos() {
    this.mostrarServiciosMedicos = 'medicos';
  }

  mostrarEspecialidades() {
    this.mostrarServiciosMedicos = 'especialidades';
  }
}

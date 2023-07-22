import { MedicoService } from './../../services/medico.service';
import { ServicioPersonaService } from './../../services/servicio-persona.service';
import { EspecialidadesService } from './../../services/especialidades.service';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { CitaComponent } from '../cita/cita.component';
import { CitaService } from 'src/app/services/cita.service';

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
  citas:any[] = [];
  mostrarServiciosMedicos: string = 'servicios';

  constructor(private serviciosService: ServiciosService, private EspecialidadesService: EspecialidadesService,
    private MedicoService: MedicoService,  private citaService: CitaService) { }

  ngOnInit(): void {
    this.obtenerTodosLibros();
    this.obtenerEspecialidades();
    this.obtenerMedicos();
    this.obtenerServicios();

  }

  obtenerTodosLibros() {
    this.citaService.obtenerCitas().subscribe(
      (res: any[]) => {
        this.citas = res;
        console.log(res);
      },
      (error: any) => {
        console.error('Error al obtener los servicios', error);
      }
    );
  }

  obtenerServicios() {
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

  mostrarCitas() {
    this.mostrarServiciosMedicos = 'citas';
  }

  eliminarServicio(servicioId: number) {
    this.serviciosService.eliminarServicio(servicioId).subscribe(
      () => {
        console.log(`Servicio con ID ${servicioId} eliminada`);
        this.obtenerServicios(); // Actualizar la lista de especialidades después de eliminar
      },
      (error) => {
        console.error(`Error al eliminar especialidad con ID ${servicioId}`, error);
      }
    );
  }

}

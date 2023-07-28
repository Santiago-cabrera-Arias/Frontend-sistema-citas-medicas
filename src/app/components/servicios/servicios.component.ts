import { MedicoService } from './../../services/medico.service';
import { ServicioPersonaService } from './../../services/servicio-persona.service';
import { EspecialidadesService } from './../../services/especialidades.service';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { CitaComponent } from '../cita/cita.component';
import { CitaService } from 'src/app/services/cita.service';
import { FacturaService } from 'src/app/services/factura.service';
import { ClinicaService } from 'src/app/services/clinica.service';

// ... otros importaciones ...

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];
  editando: boolean[]=[];
  editandoPersonas: boolean[] = [];
  servicioEditado: any;
  medicos: any[] = [];
  especialidades: any[] = [];
  citas:any[] = [];
  personas:any[] = [];
  facturas:any[]=[];
  historial:any[]=[]
  editandoServicios: boolean[] = [];
  servicesEditado: any;
  services: any[] = [];

  editandoCitas: boolean[] = [];
  citaEditada: any;
  cites: any[] = [];

  editandoMedicos: boolean[] = [];
  medicoEditado: any;
  medics: any[] = [];




  editandoEspecialidades:boolean[]=[];
  especialidadEditado: any;
  mostrarServiciosMedicos: string = 'servicios';

  editandoHistoriales:boolean[]=[];
  historialEditado: any;
  

  constructor(private serviciosService: ServiciosService, private EspecialidadesService: EspecialidadesService,
    private MedicoService: MedicoService,  private citaService: CitaService, private personaService:ServicioPersonaService,
     private facturaService:FacturaService, private clinicaService:ClinicaService) {this.servicios.forEach(() => this.editando.push(false)); }


  ngOnInit(): void {
    this.obtenerTodosLibros();
    this.obtenerEspecialidades();
    this.obtenerMedicos();
    this.obtenerServicios();
    this.obtenerPersona();
    this.obtenerFactura();
    this.obtenerHistorialClinico();
    this.editandoPersonas = this.personas.map(() => false);
  }

  obtenerHistorialClinico(){
    this.clinicaService.obtenerHistorialClinico().subscribe(
      (res:any[])=> {
        this.historial=res;
        console.log(res);
      },
      (error: any) => {
        console.error('Error al obtener historial clinico', error);
      }
    )

  }

  obtenerPersona(){
    this.personaService.obtenerPersonas().subscribe(
      (res:any[])=> {
        this.personas=res;
        console.log(res);
      },
      (error: any) => {
        console.error('Error al obtener Personas', error);
      }

    );
  }
  obtenerFactura(){
    this.facturaService.obtenerFacturas().subscribe(
      (res:any[])=> {
        this.facturas=res;
        console.log(res);
      },
      (error: any) => {
        console.error('Error al obtener facturas', error);
      }

    );
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

  mostrarHistorialClinico(){
    this.mostrarServiciosMedicos='historial'
  }

  mostrarServicios() {
    this.mostrarServiciosMedicos = 'servicios';
  }
  mostrarFacturas() {
    this.mostrarServiciosMedicos = 'facturas';
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
  mostrarPersonas() {
    this.mostrarServiciosMedicos = 'personas';
  }

  eliminarServicio(servicioId: number) {
    this.serviciosService.eliminarServicio(servicioId).subscribe(
      () => {
        console.log(`Servicio con ID ${servicioId} eliminada`);
        this.obtenerServicios(); // Actualizar la lista de especialidades después de eliminar
      },
      (error) => {
        console.error(`Error al eliminar servicio con ID ${servicioId}`, error);
      }
    );
  }

  eliminarEspecialidad(especialidadId: number) {
    this.EspecialidadesService.eliminarEspecialidad(especialidadId).subscribe(
      () => {
        console.log(`especialidad con ID ${especialidadId} eliminada`);
        this.obtenerEspecialidades(); // Actualizar la lista de especialidades después de eliminar
      },
      (error) => {
        console.error(`Error al eliminar especialidad con ID ${especialidadId}`, error);
      }
    );
  }


  eliminarPersona(personaId: number) {
    this.personaService.eliminarPersona(personaId).subscribe(
      () => {
        console.log(`persona con el Id ${personaId} eliminada`);
        this.obtenerPersona(); // Actualizar la lista de especialidades después de eliminar
      },
      (error) => {
        console.error(`Error al eliminar especialidad con ID ${personaId}`, error);
      }
    );
  }

  eliminarHistorial(historial_id: number) {
    this.clinicaService.eliminarHistorial(historial_id).subscribe(
      () => {
        console.log(`especialidad con ID ${historial_id} eliminada`);
        this.obtenerHistorialClinico(); // Actualizar la lista de especialidades después de eliminar
      },
      (error) => {
        console.error(`Error al eliminar especialidad con ID ${historial_id}`, error);
      }
    );
  }

  eliminarCitas(cita_id: number){
    this.citaService.eliminarCita(cita_id).subscribe(
      () => {
        console.log(`Cita con ID ${cita_id} eliminada`);
        this.mostrarCitas();
      },
      (error) => {
        console.error(`Error al eliminar cita con ID ${cita_id}`, error);
      }
    )
  }

  eliminarMedico(persona_Id: number) {
    this.MedicoService.eliminarMedico(persona_Id).subscribe(
      () => {
        console.log(`Medico con ID ${persona_Id} eliminada`);
        this.obtenerMedicos(); // Actualizar la lista de especialidades después de eliminar
      },
      (error) => {
        console.error(`Error al eliminar medico con ID ${persona_Id}`, error);
      }
    );
  }

  iniciarEdicion(index: number) {
    // Establecer la fila en modo de edición
    this.editandoPersonas[index] = true;
    // Crear una copia del objeto persona para editar sin afectar los datos originales
    this.servicioEditado = { ...this.personas[index] };
  }
  
  guardarCambios(index: number) {
    // Finalizar la edición y establecer la fila en modo de no edición
    this.editandoPersonas[index] = false;
  
    // Obtener los datos actualizados de la persona en el índice especificado
    const personaActualizada = this.personas[index];
  
    // Llamar a la función para actualizar la persona en el backend
    this.personaService.actualizarPersona(personaActualizada.persona_id, personaActualizada).subscribe(
      (res: any) => {
        // Actualización exitosa, puedes mostrar un mensaje de éxito o hacer cualquier otra acción
        console.log('Persona actualizada correctamente:', res);
      },
      (error: any) => {
        // Manejar el error en caso de que la actualización falle
        console.error('Error al actualizar persona:', error);
      }
    );
  }

//Editar especialidad

  iniciarEdicionEspecialidad(index:number){
    // Establecer la fila en modo de edición
    this.editandoEspecialidades[index] = true;
    // Crear una copia del objeto persona para editar sin afectar los datos originales
    this.especialidadEditado = { ...this.especialidades[index] };
  }

  guardarCambiosEspecialidad(index: number) {
    // Finalizar la edición y establecer la fila en modo de no edición
    this.editandoEspecialidades[index] = false;
  
    // Obtener los datos actualizados de la persona en el índice especificado
    const especialidadActualizada = this.especialidades[index];
  
    // Llamar a la función para actualizar la persona en el backend
    this.EspecialidadesService.actualizarEspecialidad(especialidadActualizada.persona_id, especialidadActualizada).subscribe(
      (res: any) => {
        // Actualización exitosa, puedes mostrar un mensaje de éxito o hacer cualquier otra acción
        console.log('Especialidad actualizada correctamente:', res);
      },
      (error: any) => {
        // Manejar el error en caso de que la actualización falle
        console.error('Error al actualizar especialidad:', error);
      }
    );
  }

  //Editar Historial Clinico

  iniciarEdicionHistorial(index:number){
    // Establecer la fila en modo de edición
    this.editandoHistoriales[index] = true;
    // Crear una copia del objeto persona para editar sin afectar los datos originales
    this.historialEditado = { ...this.historial[index] };
  }

  guardarCambiosHistorial(index: number) {
    // Finalizar la edición y establecer la fila en modo de no edición
    this.editandoHistoriales[index] = false;
  
    // Obtener los datos actualizados de la persona en el índice especificado
    const historialActualizada = this.historial[index];
  
    // Llamar a la función para actualizar la persona en el backend
    this.clinicaService.actualizarHistorial(historialActualizada.historial_id, historialActualizada).subscribe(
      (res: any) => {
        // Actualización exitosa, puedes mostrar un mensaje de éxito o hacer cualquier otra acción
        console.log('Historial actualizada correctamente:', res);
      },
      (error: any) => {
        // Manejar el error en caso de que la actualización falle
        console.error('Error al actualizar Historial:', error);
      }
    );
  }

  iniciarEdicionServicios(index: number) {
    // Establecer la fila en modo de edición
    this.editandoServicios[index] = true;
    // Crear una copia del objeto persona para editar sin afectar los datos originales
    this.servicesEditado = { ...this.services[index] };
  }
  
  guardarCambiosServicios(index: number) {
    // Finalizar la edición y establecer la fila en modo de no edición
    this.editandoServicios[index] = false;
  
    // Obtener los datos actualizados de la persona en el índice especificado
    const servActualizada = this.services[index];
  
    // Llamar a la función para actualizar la persona en el backend
    this.serviciosService.actualizarServicios(servActualizada.servicio_id, servActualizada).subscribe(
      (res: any) => {
        // Actualización exitosa, puedes mostrar un mensaje de éxito o hacer cualquier otra acción
        console.log('Servicio actualizada correctamente:', res);
      },
      (error: any) => {
        // Manejar el error en caso de que la actualización falle
        console.error('Error al actualizar Servicio:', error);
      }
    );

    
  }


  iniciarEdicionCitas(index: number) {
    // Establecer la fila en modo de edición
    this.editandoCitas[index] = true;
    // Crear una copia del objeto persona para editar sin afectar los datos originales
    this.citaEditada = { ...this.cites[index] };
  }
  
  guardarCambiosCitas(index: number) {
    // Finalizar la edición y establecer la fila en modo de no edición
    this.editandoCitas[index] = false;
  
    // Obtener los datos actualizados de la persona en el índice especificado
    const citeActualizada = this.cites[index];
  
    // Llamar a la función para actualizar la persona en el backend
    this.citaService.actualizarCita(citeActualizada.cita_id, citeActualizada).subscribe(
      (res: any) => {
        // Actualización exitosa, puedes mostrar un mensaje de éxito o hacer cualquier otra acción
        console.log('Servicio actualizada correctamente:', res);
      },
      (error: any) => {
        // Manejar el error en caso de que la actualización falle
        console.error('Error al actualizar Servicio:', error);
      }
    );
    
  }

  iniciarEdicionMedicos(index: number) {
    // Establecer la fila en modo de edición
    this.editandoMedicos[index] = true;
    // Crear una copia del objeto persona para editar sin afectar los datos originales
    this.medicoEditado = { ...this.medics[index] };
  }
  
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {


  constructor(private httpClient: HttpClient) { }


  public registrarMedico(personaId: number, especialidadId: number, telenoConsultorio: string) {
    const url = `http://localhost:8068/medicoControlador/guardarMedicoEspecialidad/${personaId}/${especialidadId}`;
    const medicoData = {
      telenoConsultorio: telenoConsultorio
    };
    return this.httpClient.post(url, medicoData);
  }


  public obtenerMedicos() {
    let url = 'http://localhost:8068/medicoControlador/obtenerMedicos'; 
    return this.httpClient.get<any>(url);
  }

  public eliminarMedico(medico_Id: number) {
    let url = `http://localhost:8068/eliminarMedico/${medico_Id}`;
    return this.httpClient.delete<any>(url);
  }

  public obtenerMedicoPorId(personaId: number) {
    let url = `http://localhost:8068/medicoControlador/obtenerMedicoIdPorPersonaId/${personaId}`; 
    return this.httpClient.get<any>(url);
  }




}

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

}

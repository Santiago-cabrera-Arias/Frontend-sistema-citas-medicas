import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private httpClient: HttpClient) { }

  public registrarCita(medicoId: number, personaId: number, fechaCita: string, hora: string) {
    const url = `http://localhost:8068/cita/crear/${medicoId}/${personaId}`;
    const citaData = {
      fechaCita: fechaCita,
      hora: hora,
      estado: false, 
    };

    return this.httpClient.post(url, citaData);
  }

  public obtenerCitas(){
    let url = "http://localhost:8068/cita/obtenerCitas";
    return this.httpClient.get<any>(url);     
  }

  public eliminarCita(cita_id: number) {
    let url = `http://localhost:8068/eliminarCita/${cita_id}`;
    return this.httpClient.delete<any>(url);
  }

  public actualizarCita(cita_id:number, cita: any){
    let url = `http://localhost:8068/editarCita/${cita_id}`;
    return this.httpClient.put<any>(url, cita);
  }

}

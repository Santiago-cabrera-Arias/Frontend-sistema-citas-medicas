import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {


  constructor(private httpClient: HttpClient) { }

  public crearEspecialidad(especialidade: any){
    return this.httpClient.post("http://localhost:8068/especialidad/crearEspecialidad",especialidade);
  }

  public obtenerEspecialidades(){
    let url = "http://localhost:8068/especialidad/obtenerEspecialidades";
    return this.httpClient.get<any>(url);     
  }
  public eliminarEspecialidad(especialidadId: number) {
    let url = `http://localhost:8068/especialidad/eliminarEspecialidad/${especialidadId}`;
    return this.httpClient.delete<any>(url);
  }

  public obtenerEspecialidadPorId(especialidadId: number) {
    let url = `http://localhost:8068/especialidad/obtenerEspecialidadesId/${especialidadId}`;
    return this.httpClient.get<any>(url);
  }


}
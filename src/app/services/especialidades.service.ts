import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {


  constructor(private httpClient: HttpClient) { }

  public obtenerEspecialidades(){
    let url = "http://localhost:8068/especialidad/obtenerEspecialidades";
    return this.httpClient.get<any>(url);     
  }



}

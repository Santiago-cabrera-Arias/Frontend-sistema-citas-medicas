import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {


  constructor(private httpClient: HttpClient) { }


  public crearServicio(servicio: any){
    return this.httpClient.post("http://localhost:8068/servicio/guardarServicio",servicio);
  }

  public obtenerTodosServicios(){
    let url = "http://localhost:8068/servicio/obtenerTodosServicios";
    return this.httpClient.get<any>(url);     
  }


  public actualizarServicios(servicioId:number, servicio: any){
    let url = `http://localhost:8068/servicio/editarServicio/${servicioId}`;
    return this.httpClient.put<any>(url, servicio);
  }

  public eliminarServicio(servicioId: number) {
    let url = `http://localhost:8068/servicio/eliminarServicio/${servicioId}`;
    return this.httpClient.delete<any>(url);
  }


}

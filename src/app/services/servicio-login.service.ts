import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  
  constructor(private httpClient: HttpClient) { }


  public crearPersona(persona: any){
    return this.httpClient.post("http://localhost:8068/personas/registrar",persona);
  }

  

  // public obtenerTodosLibros(){
  //   let url = "http://10.128.0.8:8080/demoappdocker/ws/libros/lista";
  //   return this.httpClient.get<any>(url);     
  // }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  
  constructor(private httpClient: HttpClient) { }


  public login(usuario: any){
    return this.httpClient.post("http://localhost:8068/usuarios/login",usuario);
  }

  

  // public obtenerTodosLibros(){
  //   let url = "http://10.128.0.8:8080/demoappdocker/ws/libros/lista";
  //   return this.httpClient.get<any>(url);     
  // }


}

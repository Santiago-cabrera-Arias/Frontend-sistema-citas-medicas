import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonaService {


  constructor(private httpClient: HttpClient) { }

  public crearPersona(persona: any){
    return this.httpClient.post("http://localhost:8068/personas/registrar",persona);
  }

  public obtenerPersonasMedicos(){
    let url = "http://localhost:8068/personas/obtenerPersonas";
    return this.httpClient.get<any>(url);     
  }

  obtenerPersonasPacientes() {
    let url = 'http://localhost:8068/personas/obtenerPersonas'; 
    return this.httpClient.get<any>(url);
  }
  obtenerPersonas(){
    let url="http://localhost:8068/personas/obtenerPersonas"
    return this.httpClient.get<any>(url);
  }
  public eliminarPersona(personaId: number) {
    let url = `http://localhost:8068/personas/${personaId}`;
    return this.httpClient.delete<any>(url);
  }
  public actualizarPersona(personaId:number, persona: any){
    let url = `http://localhost:8068/personas/${personaId}`;
    return this.httpClient.put<any>(url, persona);
  }
 



}

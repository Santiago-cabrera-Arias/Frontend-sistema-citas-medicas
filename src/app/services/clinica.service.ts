import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  constructor(private httpClient: HttpClient) { }

  public registrarClinica(medico_id: number, persona_id: number, prescripciones: string, ordenes: string,certificados:string) {
    console.log('-------------'+medico_id+persona_id+prescripciones+ordenes+certificados)
    const url = `http://localhost:8068/clinica/crear/${medico_id}/${persona_id}`;
    const ClinicaData = {
       prescripciones: prescripciones,
       ordenes: ordenes,
       certificados: certificados,
    };
    console.log('no registraaaa')
    return this.httpClient.post(url, ClinicaData);
  }

  public obtenerHistorialClinico(){
    let url = "http://localhost:8068/clinica/listar";
    return this.httpClient.get<any>(url);     
  }
  public eliminarHistorial(clinica_id: number) {
    let url = `http://localhost:8068/clinica/eliminarHistorial/${clinica_id}`;
    return this.httpClient.delete<any>(url);
  }
  public actualizarHistorial(clinica_id:number, clinica: any){
    let url = `http://localhost:8068/especialidad/${clinica_id}`;
    return this.httpClient.put<any>(url, clinica);
  }
  


}
  /*guardarClinicaEnBackend(medicoId: number, personaId: number, clinicaData: any) {
    const url = `http://localhost:8068/clinica/crear//${medicoId}/${personaId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.httpClient.post<any>(url, clinicaData, { headers });
  }*/



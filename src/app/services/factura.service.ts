import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  constructor(private httpClient: HttpClient) { }


  /*public crearFacturas(factura: any){
    return this.httpClient.post("http://localhost:8068/facturaControlador/crear",factura);
  }*/

  public obtenerFacturas(){
    let url = "http://localhost:8068/facturaControlador/obtenerFacturas";
    return this.httpClient.get<any>(url);     
  }


  public crearFacturas(personaId: number, servicioId: number, cantidad: number) {
    console.log('-------------'+personaId)
    const factura = {
      personaId: personaId,
      servicioId: servicioId,
      cantidad:cantidad
    };
    console.log('http://localhost:8068/facturaControlador/crear')
    const url = `http://localhost:8068/facturaControlador/crear/${personaId}/${servicioId}/${cantidad}`;
    return this.httpClient.post(url,factura);
  }

  

  

 
}

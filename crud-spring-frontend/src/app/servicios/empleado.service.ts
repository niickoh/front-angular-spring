import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  private baseURL = "http://localhost:8080/api/v1";


  //Metodo que lista todos los empleados
  obtenerListaEmpleados():Observable<Empleado[]> {
    return this._httpClient.get<Empleado[]>(`${this.baseURL}/empleados`);
  }

  registrarEmpleado(empleado:Empleado):Observable<Object> {
    return this._httpClient.post(`${this.baseURL}/empleados`, empleado, {responseType:'text'})
  }

  eliminarEmpleado(id:number):Observable<Object> {
    return this._httpClient.delete(`${this.baseURL}/empleados/${id}`);
  }

  buscarEmpleado(id:number):Observable<Object> {
    return this._httpClient.get<Empleado>(`${this.baseURL}/empleados/${id}`);
  }

  actualizarEmpleado(id:number, empleado:Empleado):Observable<Object> {
    return this._httpClient.put(`${this.baseURL}/empleados/${id}`, empleado);

  }
}

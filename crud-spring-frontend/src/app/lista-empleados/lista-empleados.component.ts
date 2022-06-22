import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor(
    private _empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this._empleadoService.obtenerListaEmpleados().subscribe((res: any) => {
      this.empleados = res;
    })
  }

  actualizarEmpleado(id:number) {
    this.router.navigate(['/actualizar-empleado', id]);
  }
  eliminarEmpleado(id:number) {
    console.log(id);
    this._empleadoService.eliminarEmpleado(id).subscribe(res => {
      this.obtenerEmpleados();
    });
  }

  detallesEmpleado(id:number) { 
    this.router.navigate(['detalles-empleado', id]);
  }
    
    
}

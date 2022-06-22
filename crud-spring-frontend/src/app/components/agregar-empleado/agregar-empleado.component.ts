import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';


@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(
    private _empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.empleado);    
  }

  onSubmit() {
    this._empleadoService.registrarEmpleado(this.empleado).subscribe(res => {
      console.log(res);
    }, (err:any) => {
      console.error(err);
    })
    
  }

}

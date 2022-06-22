import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css']
})
export class DetallesEmpleadoComponent implements OnInit {

  id:number;
  empleado: Empleado;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    console.log(this.route.snapshot.params['id']);
    
    this.empleadoService.buscarEmpleado(this.id).subscribe((res:any) => {
      this.empleado = res;
    });
  }

}

import { Tarea } from './../../models/Tarea';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea = "";

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){


    // crear un objeto tarea
    const Tarea: Tarea = {
      nombre: this.nombreTarea,
      estado:false

    }
    //agregar el objeto tarea al array
    this.listaTareas.push(Tarea);
    //reset el formulario
    this.nombreTarea = "";
  }

  eliminarTarea(index:number):void{
    console.log(index);
    this.listaTareas.splice(index,1);
  }

  actualizarTarea(tarea:Tarea, index:number):void {
    this.listaTareas[index].estado = !tarea.estado
  }

}

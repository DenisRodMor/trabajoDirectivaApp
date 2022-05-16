import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas: object[];


  registrarUsuario(){

    this.registrado=true;
    this.mensaje="Usuario registrado con exito"
  }


  constructor(){
    this.entradas=[
      
      {titulo:"Python cada dia más presente en la vida de un programador"},
      {titulo:"Django cada vez más funcional"},
      {titulo:"Mongo DB la base de datos del futuro"},
      {titulo:"JavaScript potencia tus aplicaciones"},
      {titulo:"Donde quedó Pascal"},

    ]
  }

}

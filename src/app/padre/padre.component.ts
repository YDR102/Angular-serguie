import { Component, inject, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  //PIPE
  fecha?: Date = new Date;

  //SERVICIO
  
  nombre?: string;

  // constructor(
  //    private _servicioFamilar: ServicioFamiliarService son dos formas de injectar el servicio
  //    ){}

  _servicioFamiliar2 = inject(ServicioFamiliarService) // son dos formas de injectar el servicio

    ngOnInit(): void {
      this._servicioFamiliar2.setetHermanoGrande("Juan");
      this.nombre = this._servicioFamiliar2.getHermanoGrande()
    }
  
  saludar(){
    this._servicioFamiliar2.saludar(this._servicioFamiliar2.getHermanoPequeno() || "")
  }

  preguntar(){
    console.log(this._servicioFamiliar2.preguntarPorHijo() || "")
  }
  
  //OUTPUT
  mensajeRecibido: string = "";
  recibirMensaje($event:any){
    this.mensajeRecibido = $event;
  }

  //INPUT
  mensajePadre: string = "mensaje desde padre";

  //CONTADOR
  valorContaodor: number = 0;

  incrementar(){
    this.valorContaodor++
  }

  decrementar(){
    this.valorContaodor--
  }

  datoPadre: string = "hola mundo";
}

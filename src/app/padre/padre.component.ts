import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //OUTPUT
  @Output() mensajeHijo = new EventEmitter<string>();

  mensaje: string = "";

  enviarMensaje(){
    this.mensajeHijo.emit(this.mensaje)
  }

  //INPUT
  // mensaje enviado desde el padre
  @Input() recibeHijo?: string; // se declaro vacio (para poder hacerlo tienes que poner "?" si no es "@Input() recibeHijo?: string = contenido;")

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {

  nombre?: string;

  constructor(
    private _servicioFamilar: ServicioFamiliarService
    ){}

    ngOnInit(): void {
      this._servicioFamilar.setHermanoPequeno("Pedro");
      this.nombre = this._servicioFamilar.getHermanoPequeno()
    }

  saludar(){
    this._servicioFamilar.saludar(this._servicioFamilar.getHermanoGrande() || "")
  }
  preguntar(){
    console.log(this._servicioFamilar.preguntarPorHijo() || "")
  }
}

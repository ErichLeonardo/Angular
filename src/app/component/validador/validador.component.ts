import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';
import { Driver } from 'src/app/model/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-validador',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './validador.component.html',
  styleUrls: ['./validador.component.css']
})
export class ValidadorComponent {

  nombre:string = '';
  edad:number=10;

  estiloLetras={
    'color':'red',
    'font-weight':'normal',
    'font-size':'1rem'
  }

  esMayorDeEdad:boolean = false;

  public driverS = inject(DriverService);

  private logS = inject(LogService);

  constructor(){  /* tb podemos declarar las variables aquí */
    
  }

  incrementar(){
    this.edad++;
    this.esMayorDeEdad=this.edad>=18?true:false;
  }

  reducir(){
    this.edad--
    this.esMayorDeEdad=this.edad>=18?true:false;
  }

  resetea():void{
    this.nombre='';
    this.edad = 10;
  }

  inserta():void{
    alert(`${this.nombre} ya se puede sacar la licencia`);
    this.driverS.add({
      nombre:this.nombre,
      edad:this.edad
    });
    this.resetea();
  }

  poneMayuscula(event?:Event):void{
    console.log(event);
    this.nombre = this.nombre.toUpperCase().trim();
  }



}


import { Injectable,inject } from '@angular/core';
import { Driver } from '../model/driver';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private _data:Driver[]=[];   /** Las variables privadas se ponen con _ al principio */
  private logS = inject(LogService);
  constructor() { }
  add(driver:Driver):void{
    this._data.push(driver);
    this.logS.log("Se ha insertado un nuevo driver")
  }
  get data(){
    return this._data
  }
}

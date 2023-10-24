import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-c2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  protected logS = inject(LogService);

  constructor(){
    this.logS.warn("Creando componente 2");
  }
}

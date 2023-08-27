import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() devops:any = {};
  @Input() index: number = 0;

  constructor(private router: Router){}

  verDev(){
    console.log(this.index);
    this.router.navigate( ['/dev',this.index]);
  }
}

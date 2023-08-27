import { Component, OnInit } from '@angular/core';
import { DevOps, DevopsService } from "../../services/devops.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
 
  devops:DevOps[] = [];

  constructor( private _devopsService: DevopsService ) {

  }
  ngOnInit() {
    this.devops = this._devopsService.getService();
    console.log(this.devops);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DevopsService } from "../../services/devops.service";

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})

export class DevComponent {

  dev:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _devService: DevopsService){
            
    this.activatedRoute.params.subscribe( params => {
      this.dev = this._devService.getServices(params['id']);
    })
  }
}

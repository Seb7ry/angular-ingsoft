import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevopsService {

  private devops:DevOps[]= [
    {
      nombre: "Plan"  ,
      bio: "",
      contenido: "",
      img: "assets/img/step1.png",
      step: "Paso 1"
    },
    {
      nombre: "Test",
      bio: "",
      contenido: "",
      img: "assets/img/step4.png",
      step: "Paso 4"
    },
    {
      nombre: "Operate",
      bio: "",
      contenido: "",
      img: "assets/img/step7.png",
      step: "Paso 7"
    },
    {
      nombre: "Code",
      bio: "",
      contenido: "",
      img: "assets/img/step2.png",
      step: "Paso 2"
    },
    {
      nombre: "Release",
      bio: "",
      contenido: "",
      img: "assets/img/step5.png",
      step: "Paso 5"
    },
    {
      nombre: "Monitor",
      bio: "",
      contenido: "",
      img: "assets/img/step8.png",
      step: "Paso 8"
    },
    {
      nombre: "Build",
      bio: "",
      contenido: "",
      img: "assets/img/step3.png",
      step: "Paso 3"
    },
    {
      nombre: "Deploy",
      bio: "",
      contenido: "",
      img: "assets/img/step6.png",
      step: "Paso 6"
    }
  ];

  constructor() { 
    console.log("Hola.");
  }

  getService(){
    return this.devops;
  }

  getServices(idx: number){
    return this.devops[idx];
  }
}

export interface DevOps{
  nombre: string,
  bio: string,
  contenido: string,
  img: string,
  step: string
};

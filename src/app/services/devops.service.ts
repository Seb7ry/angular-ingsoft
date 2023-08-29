import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevopsService {

  private devops:DevOps[]= [
    {
      nombre: "Plan"  ,
      bio: "Definicón general de actividades",
      contenido: "En esta fase, se define la visión del proyecto, se establecen los objetivos y se planifican las tareas y recursos necesarios. Se identifican los requisitos del software y se crea una hoja de ruta para el desarrollo, pruebas e implementación. También se determinan los plazos y las prioridades.",
      img: "assets/img/step1.png",
      img2:"assets/img/bannerplan.png",
      img3:"assets/img/planapps.png",
      step: "Paso 1"
    },
    {
      nombre: "Test",
      bio: "Controles de calidad",
      contenido: "En esta fase, se llevan a cabo diferentes tipos de pruebas para asegurarse de que el software funciona correctamente. Esto incluye pruebas unitarias, que evalúan componentes individuales; pruebas de integración, que verifican la interacción entre módulos; y pruebas de rendimiento, seguridad y usabilidad.",
      img: "assets/img/step4.png",
      img2:"assets/img/bannertest.png",
      img3:"assets/img/testapp.png",
      step: "Paso 4"
    },
    {
      nombre: "Operate",
      bio: "Gestionar lo construido",
      contenido: "En esta fase, el software se mantiene y opera en producción. Los equipos de operaciones se encargan de la monitorización, el ajuste, la escalabilidad y la disponibilidad continua del sistema. Pueden aplicarse parches y actualizaciones para garantizar la seguridad y el rendimiento.",
      img: "assets/img/step7.png",
      img2:"assets/img/banneroperate.png",
      img3:"assets/img/operateapp.png",
      step: "Paso 7"
    },
    {
      nombre: "Code",
      bio: "Creación del software ",
      contenido: "Durante esta etapa, los desarrolladores escriben y revisan el código fuente del software en base a los requisitos y especificaciones definidos en la fase de planificación. Se aplican prácticas de desarrollo colaborativo y control de versiones para mantener un código limpio y bien documentado.",
      img: "assets/img/step2.png",
      img2:"assets/img/bannercode.png",
      img3:"assets/img/codeapp.png",
      step: "Paso 2"
    },
    {
      nombre: "Release",
      bio: "Implementación de los servicios",
      contenido: "En esta etapa, se prepara el software para su lanzamiento en entornos de producción o de usuario final. Se crean versiones estables y se documentan los cambios incluidos en cada versión. La automatización de la generación de lanzamientos asegura que el proceso sea rápido y consistente.",
      img: "assets/img/step5.png",
      img2:"assets/img/bannerrelease.png",
      img3:"assets/img/release.png",
      step: "Paso 5"
    },
    {
      nombre: "Monitor",
      bio: "Se revisa constantemente el producto",
      contenido: "Durante toda la vida útil del software, se recopilan datos sobre su rendimiento, uso y posibles problemas. La monitorización constante permite detectar y solucionar problemas rápidamente, así como tomar decisiones informadas sobre mejoras y optimizaciones.",
      img: "assets/img/step8.png",
      img2:"assets/img/bannermonitor.png",
      img3:"assets/img/monitorapp.png",
      step: "Paso 8"
    },
    {
      nombre: "Build",
      bio: "Continuo mantenimiento",
      contenido: "Aquí, el código fuente se compila y se construyen los artefactos ejecutables, como binarios y bibliotecas. También puede incluir la empaquetación de recursos y configuraciones necesarios para el software. La construcción automatizada garantiza la consistencia y reduce errores.",
      img: "assets/img/step3.png",
      img2:"assets/img/bannerbuild.png",
      img3:"assets/img/buildapp.png",
      step: "Paso 3"
    },
    {
      nombre: "Deploy",
      bio: "Retroalimentacion y ajustes basico",
      contenido: "Aquí se instala el software en los entornos de producción o de prueba. Puede implicar la configuración de servidores, bases de datos y otros recursos necesarios. La automatización de la implementación garantiza que los procedimientos sean repetibles y minimiza la posibilidad de errores.",
      img: "assets/img/step6.png",
      img2:"assets/img/bannerdeploy.png",
      img3:"assets/img/deployapp.png",
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
  img2: string,
  img3: string,
  step: string
};
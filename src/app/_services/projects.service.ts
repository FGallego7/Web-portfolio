import { Project } from './../_models/project';
import { Injectable } from '@angular/core';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: Project[] = [
    {id: 0, name: 'Trackeador de habitos', summary: 'Fullstack App desarrollada usando Angular, TypeScript y Java', desc: 'Herramienta diseñada para ayudar a identificar, modificar tus hábitos diarios. Permite registrar los hábitos negativos que deseas dejar y realizar un seguimiento de tu progreso a medida que avanzas en tu camino.', projectLink: 'https://github.com/', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVA], pictures: ['../../assets/image1.png', '../../assets/image2.png', '../../assets/image3.png']},
    {id: 1, name: 'Analyze Assets', summary: 'App utilizada para ver datos del mercado de activos', desc: 'AnalyzeAssets es una aplicación de análisis de activos financieros que permite a los usuarios obtener datos de activos de Google Finance y de la API de Binance. La aplicación ofrece una interfaz intuitiva y herramientas visuales que simplifican el realizar un análisis detallado de los activos financieros', projectLink: 'https://github.com/', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.PYTHON], pictures: ['../../assets/image1.png', '../../assets/image2.png', '../../assets/image3.png']},
    {id: 2, name: 'WMS', summary: 'Warehouse Management System realizado como trabajo final de 3er año de universidad', desc: 'Sistema de Gestión de Almacenes diseñado y desarrollado como proyecto final de universidad. La aplicación está destinada a facilitar la administración y control eficiente de inventarios y operaciones logísticas en almacenes de empresas. Cuenta con modulos de Log-In, control de permisos de usuarios y Logs de sistema.', projectLink: 'https://github.com/', tags: [Tag.C_SHARP], pictures: ['../../assets/image1.png', '../../assets/image2.png', '../../assets/image3.png']},
    {id: 3, name: 'Simple Trading Bot', summary: 'Robot de trading simple que funciona con la API de binance', desc: 'Aplicación diseñada para analizar datos de criptomonedas, ejecutar operaciones y facilitar la integración de diferentes estrategias de trading en el mercado de criptomonedas. Utiliza la API de Binance para acceder a datos de mercado y ejecutar operaciones, así como los WebSockets de Binance para obtener datos en tiempo real.', projectLink: 'https://github.com/', tags: [Tag.PYTHON], pictures: ['../../assets/image1.png', '../../assets/image2.png', '../../assets/image3.png']},
  ];

  GetAllProjects() {
    return this.projects
  }

  GetProjectById(id: number): Project{
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError("Project not Found");
    }

    return project;
  }
}

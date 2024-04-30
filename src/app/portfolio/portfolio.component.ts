import { ProjectsService } from './../_services/projects.service';
import { Project } from './../_models/project';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tag } from '../_models/tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit  {

  projects = {} as Project[];

  isCollapsed: boolean = false;
  python: boolean = false;
  angular: boolean = false;
  java: boolean = false;
  cSharp: boolean = false;
  typeScript: boolean = false;
  isFiltering: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Francisco Gallego - Portfolio')
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetAllProjects();
  }

  Filter(){
    let filter: Tag[] = [];

    if(this.python){
      filter.push(Tag.PYTHON)
    }
    if(this.angular){
      filter.push(Tag.ANGULAR)
    }
    if(this.java){
      filter.push(Tag.JAVA)
    }
    if(this.cSharp){
      filter.push(Tag.C_SHARP)
    }
    if(this.typeScript){
      filter.push(Tag.TYPESCRIPT)
    }

    if(this.python || this.angular || this.java || this.cSharp || this.typeScript){
      this.isFiltering = true;
    }
    else{
      this.isFiltering = false
    }

    this.projects = this.projectService.GetProjectByTag(filter);
  }

  Reset(){
    this.python = false;
    this.angular = false;
    this.java = false;
    this.cSharp = false;
    this.typeScript = false;
    this.isFiltering = false;

    this.projects = this.projectService.GetAllProjects();
  }
}

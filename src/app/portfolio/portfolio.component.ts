import { ProjectsService } from './../_services/projects.service';
import { Project } from './../_models/project';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit  {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Francisco Gallego - Portfolio')
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetAllProjects();
  }
}

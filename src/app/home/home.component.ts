import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  project = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Francisco Gallego - Home');
  }
  ngOnInit(): void {
    this.project = this.projectService.GetProjectById(1);
  }
}

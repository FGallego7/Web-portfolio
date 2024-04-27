import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component } from '@angular/core';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  project = {} as Project;

  constructor(public BsModalRef: BsModalRef){}
}

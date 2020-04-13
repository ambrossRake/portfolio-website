import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/models/project.model'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input("project") project: Project;

  constructor() { }

  ngOnInit(): void {
    console.log(this.project.name);
  }

}

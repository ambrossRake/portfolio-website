import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Project } from '../shared/models/project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private restService : RestService) { }

  ngOnInit(): void {
    this.restService.getProjects().subscribe((response) => {
     this.projects = response
    });
  }

}

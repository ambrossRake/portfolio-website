import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Repository } from '../shared/models/repository.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repositories: Repository[];

  constructor(private restService : RestService) { }

  ngOnInit(): void {
    this.restService.getRepositories().subscribe((response) => {
     this.repositories = response.filter((repo => !repo.fork));
    });
  }

}

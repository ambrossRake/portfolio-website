import { Component, Input } from '@angular/core';
import { Repository } from '../shared/models/repository.model'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent{
  @Input("repository") repository: Repository;

  constructor() { }


}

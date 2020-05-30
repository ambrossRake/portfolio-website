import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('router-animation', [
      transition('* <=> *', [
        style({ transform: 'translateX(100%)' }),
        animate('250ms ease', style({transform: 'translateX(0%)'}))
      ])
    ])
  ]
})

export class AppComponent {
  prepareRouteTransition(outlet: RouterOutlet) {
     return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

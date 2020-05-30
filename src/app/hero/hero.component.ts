import { Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [

    trigger('fadeIn', [
      state('void', style({ opacity:0})),
      transition(':enter', [
        animate('1.0s')
      ])
    ])
  ]
})
export class HeroComponent{

  constructor() { }


}

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from '@angular/animations';

export const fade =
  trigger('route-animation', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position:'absolute',
          left:0,
          width: '100%',
          opacity:0,
          transform: 'scale(0) translateY(100%)'
        }),
      ]),
      query(':enter',[
        animate('2s ease',
          style({ opacity: 1, transform: 'scale(1)'})
        ),
      ])
    ]),
  ]);

/*
  trigger('route-animation', [
    style({
      position:'absolute',
      left:0,
      width: '100%',
      opacity:0,
      transform: 'scale(0) translateY(100%)'
    })
  ]);
  query(':enter', [
    animate('.5ms ease', style({opacity: 1, transform: 'scale(1) translateY(0)'}))
  ]),
*/

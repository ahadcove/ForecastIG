import { Component, Input, Output, EventEmitter, trigger, state, style, transition, animate, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
    animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0, "z-index":-99}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1, "z-index":99}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1, "z-index":99}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0, "z-index":-99}))
        ])
      ]
    )
  ]
})
export class MenuComponent implements OnInit {
  public menuOpen:Boolean = false;

  openMenu(){
    this.menuOpen = !this.menuOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}

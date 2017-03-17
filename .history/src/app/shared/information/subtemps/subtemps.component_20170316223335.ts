import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtemps',
  templateUrl: './subtemps.component.html',
  styleUrls: ['./subtemps.component.scss']
})
export class SubtempsComponent implements OnInit {
  @Input() packedDay;
  
  constructor() { }

  ngOnInit() {
  }

}

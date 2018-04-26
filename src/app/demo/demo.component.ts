import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

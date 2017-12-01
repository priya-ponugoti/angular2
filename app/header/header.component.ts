import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstname : string = 'sid';
  lastname: string = 'sampelly';
  gender : string = 'M';
  age :number = 28;
  
  constructor() { }
  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
   firstname : string = 'sid';
   lastname : string = 'sampelly';
   heading : string = 'interpolation';
   heading2: string='component --> view(1 way)'
   imagepath: string ='https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  age : number = null;
  fullname() : string{
    return this.firstname+ '  ' + this.lastname
  };
   constructor() { }

  ngOnInit() {
  }

}

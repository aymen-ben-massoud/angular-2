import { Component, OnInit } from '@angular/core';
declare var navi: any;
declare var up: any;

  declare var addd: any;
  declare var addd2:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new navi()
    new up()
    new addd()
    new addd2()

  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var show:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    new show()
  }
  
  add(login:NgForm){

  } 
 
}

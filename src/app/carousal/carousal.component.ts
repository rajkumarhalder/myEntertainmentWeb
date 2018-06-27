import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent  {


  items: Array<any>=[];

  constructor() {

this.items=[
  {name : '/assets/images/image-6.png'},
  {name : '/assets/images/image-8.png'},
{name : '/assets/images/image-1.jpg'},
{name : '/assets/images/image-2.png'},
{name : '/assets/images/image-3.png'},
{name : '/assets/images/image-4.png'},
{name : '/assets/images/image-5.png'}
];

console.log(this.items)

  }





}

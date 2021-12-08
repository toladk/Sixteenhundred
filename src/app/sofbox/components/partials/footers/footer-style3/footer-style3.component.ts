import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style3',
  templateUrl: './footer-style3.component.html',
  styleUrls: ['./footer-style3.component.css']
})
export class FooterStyle3Component implements OnInit {
  year: any;

  constructor() { }

  ngOnInit() {
    this.getFullYear();
  }

  getFullYear(): void{
    this.year = new Date().getFullYear();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-trick1',
  templateUrl: './tips-trick1.component.html',
  styleUrls: ['./tips-trick1.component.css']
})
export class TipsTrick1Component implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
  };

  List: any[] = [
    { title: 'Graphics' , animate: 'false' , hoverClass: 'purple-hover', percentage: '50' },
    { title: 'Graphics' , animate: 'false' , hoverClass: 'org-hover', percentage: '50' },
    { title: 'Graphics' , animate: 'false' , hoverClass: 'green-hover', percentage: '50' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  public list: any;
  constructor() {
    this.list = [
      {
        icon: 'ion-code-working',
        title: 'Clean Code',
        description: 'Clean Coding, well crafted, re-factored, readable, reusable codes.'
      },
      {
        icon: 'ion-document',
        title: 'Well Documented',
        description: 'Well Documented Codes , documentation is paramount to us as this makes review self-explanatory.'
      },
      {
        icon: 'ion-paintbrush',
        title: 'Awesome Design',
        description: 'Awesome Design, we use latest web development tools and industry standard to build application.'
      },
      {
        icon: 'ion-android-globe',
        title: 'Responsive Web Design',
        description: 'Responsive Web Design , our design and compatible with all kinds of devices.'
      },
      {
        icon: 'ion-android-checkmark-circle',
        title: 'Cross Browser Support',
        description: 'Cross Browser Support , we test our solutions with a variety of browsers to ensure compatibility.'
      },
      {
        icon: 'ion-checkmark',
        title: 'Great Support',
        description: 'Great Support for our Solutions.'
      }
    ];
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  public cardData = [
    {
      title: 'Web',
      icon: 'ion-planet',
      description: 'Web Application Development'
    },
    {
      title: 'Software',
      icon: 'ion-aperture',
      description: 'Custom Software Development'
    },
    {
      title: 'Integration',
      icon: 'ion-ios-barcode',
      description: 'System Integration, Maintanance & Support'
    },
    {
      title: 'Mobile',
      icon: 'ion-nuclear',
      description: 'Mobile Application Development'
    },
    {
      title: 'Audit',
      icon: 'ion-ios-paper',
      description: 'Technology Audit'
    },
    {
      title: 'Consulting',
      icon: 'ion-ios-people',
      description: 'General IT Consulting'
    }
  ];

  ngOnInit() {
  }

}

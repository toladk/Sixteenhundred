import {Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PluginsService} from '../../sofbox/plugins.service';
// @ts-ignore
import logoImg from '../../../assets/images/logo.png';
import { subHeader } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {


  constructor(private plugins: PluginsService) { }

  public navLogo: string = logoImg;

  public navItems: any = [
    {
      href: '#iq-home',
      title: 'Home',
      active: true,
      children: true,
      child: subHeader
    },
    { href: '#how-it-works', title: 'About' },
    { href: '#software-features', title: 'Service' },
    { href: '#great-screenshots', title: 'Screenshots' },
    { href: '#contact', title: 'Contact' }
  ];

  public footerText = '© 2018 Sofbox Developed by <b>iqonicthemes</b>.';

  public socialNavItems: any = [
    { href: '#', icon: '<i class="fab fa-twitter"></i>' },
    { href: '#', icon: '<i class="fab fa-facebook-f"></i>' },
    { href: '#', icon: '<i class="fab fa-google"></i>' },
    { href: '#', icon: '<i class="fab fa-github"></i>' },
  ];

  ngOnInit() {

    // Init all plugins...
    const current = this;
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      current.plugins.index();
    }, 200);

  }

}

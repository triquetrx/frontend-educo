import { Component } from '@angular/core';
import { Service } from './Services';

@Component({
  selector: 'app-landing-page-component-second',
  templateUrl: './landing-page-component-second.component.html',
  styleUrls: ['./landing-page-component-second.component.scss'],
})
export class LandingPageComponentSecondComponent {
  services: Service[] = [
    {
      imgName: 'edit',
      description: 'Nunc Dolor',
    },
    {
      imgName: 'handshake',
      description: 'Laoreet Orci Massa',
    },
    {
      imgName: 'id-card',
      description: 'Ultricies Bibendum',
    },
    //Here work
    {
      imgName: 'people',
      description: 'Diam Nullam Adipiscing',
    },
    {
      imgName: 'script',
      description: 'Uma Suscipit',
    },
    {
      imgName: 'group',
      description: 'Diam Metus',
    },
  ];
}

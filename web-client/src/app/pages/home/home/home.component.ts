import { Component } from '@angular/core';
import { InitComponent } from '../home-sections/init/init.component';
import { AboutUsComponent } from '../home-sections/about-us/about-us.component';
import { ContactUsComponent } from '../home-sections/contact-us/contact-us.component';
import { DistinguishesUsComponent } from '../home-sections/distinguishes-us/distinguishes-us.component';
import { OurProjectsComponent } from '../home-sections/our-projects/our-projects.component';
import { WhyWithUsComponent } from '../home-sections/why-with-us/why-with-us.component';

@Component({
  selector: 'app-home',
  imports: [
     InitComponent,
     AboutUsComponent,
     ContactUsComponent,
     DistinguishesUsComponent,
     OurProjectsComponent,
     WhyWithUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

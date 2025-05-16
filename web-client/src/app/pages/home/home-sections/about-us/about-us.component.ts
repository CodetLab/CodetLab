import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [
    CommonModule
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  
  slide = 1;
  SlideMaximo = 3
  SlideMinimo = 1

  slidePlus1(){
    console.log(this.slide)
    if (this.slide == this.SlideMaximo){
      this.slide = this.SlideMinimo
    }
    else {
      this.slide += 1
    }

  }

  slideMinus1(){
    console.log(this.slide)
    if (this.slide == this.SlideMinimo){
      this.slide = this.SlideMaximo
    }
    else {
      this.slide -= 1
    }
  }

}

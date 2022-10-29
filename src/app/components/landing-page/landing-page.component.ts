import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  visible: boolean = false;

  constructor() {
    window.onload = () => {
      this.visible = true;
    }

  }

  ngOnInit(): void {
  }

  // ngAfterViewInit() {
  //   this.visible = true;
  //   console.log(this.visible)
  // }
}

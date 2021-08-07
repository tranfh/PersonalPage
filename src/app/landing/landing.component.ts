import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit {
  discord: any = "./assets/discord.png";
  plane: any = "./assets/plane.png";
  linkedin: any = "./assets/linkedin.png";
  github: any = "./assets/github.png";

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'black';
  }

  ngOnInit(): void {

    const target = document.querySelector('.typewriter')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'gainsboro',
      cursorColor: 'white'
    })

    writer
      .type("software engineer")
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(17)
      .type('full-stack developer')
      .rest(500)
      .remove(23)
      .type('coffee lover ☕')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)
      .clear()
      .start()

  }
}
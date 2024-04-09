import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('divMain', { static: false })
  divMain!: ElementRef;

  @ViewChild('divIntro', { static: false })
  divIntro!: ElementRef;

  isReadMore: boolean = false;

  isShow: boolean = false;
  scrolled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onReadMore(): void {
    this.isReadMore = !this.isReadMore;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {

    const divIntro = this.divIntro.nativeElement.getBoundingClientRect();

    if (divIntro.top < -288) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    if (this.divMain && this.divMain.nativeElement) {
      this.divMain.nativeElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

}

import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('divMain', { static: false })
  divMain!: ElementRef;

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

    const divMain = this.divMain.nativeElement.getBoundingClientRect();

    if (divMain.top < 104) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}

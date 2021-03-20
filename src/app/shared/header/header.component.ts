import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  sideToggle(){
    this.document.body.classList.toggle('side-nav-folded');
  }

  ngOnDestroy() {
    this.document.body.classList.remove('side-nav-folded');
  }
}

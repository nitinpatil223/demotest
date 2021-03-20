import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {

  isTablet: boolean;
  isDesktop: boolean;
  viewport: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    public breakpointObserver: BreakpointObserver
    ) {

  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 1024px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isDesktop = false;
        this.isTablet = true;
        this.viewport = 'tablet';
      } else {
        this.isDesktop = true;
        this.isTablet = false;
        this.viewport = 'phone';
      }
    });
  }

  closeSideMenu() {
    if(this.isTablet){
      this.document.body.classList.remove('side-nav-folded');
     }
  }


  // tslint:disable-next-line: typedef
  sideToggle(){
    this.document.body.classList.toggle('side-nav-folded');
  }
  closeMenu() {
    this.document.body.classList.remove('side-nav-folded');
  }

  ngOnDestroy() {
    this.document.body.classList.remove('side-nav-folded');
  }

}

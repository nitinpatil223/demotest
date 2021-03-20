import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html'
})
export class ViewAdminComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

   // onclick last page open

   back(): void {
    this.location.back()
  }

}


import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { ConfirmModalService } from 'src/app/services/confirm-modal.service';

//user table for loop dynamic

interface User {
  name: string;
  userName: string;
  email:string;
  city: string;
  phoneNumber: string;
  status: string;
}

const USERS: User[] = [

  {
    name: 'John Doe',
    userName: 'johndoe123',
    email:'johndoe@example.com',
    phoneNumber: '+1 4078783960',
    city: 'New York',
    status: 'Active'
  },

  {
    name: 'Mark Cummins',
    userName: 'markC456',
    email:'marckc@example.com',
    phoneNumber: '+1 4078783960',
    city: 'New Jersy',
    status: 'Deactive'
  },
];

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html'
})
export class AdminManagementComponent implements OnInit {


  showSearchContent: boolean;
  searchFrom: FormGroup;
// success message intigration

  private success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;
  errorMessage: string;
  showPage: boolean;

  //status dropdown s array

  statust = [{
    status: 'Active',
   },
   {
    status: 'Deactive',
   }
   ];

  users = USERS;

  constructor(
    private modalService: NgbModal,
    private fb:FormBuilder,
    private confirmModalService: ConfirmModalService) {
  }


  ngOnInit(): void {
this.searchFrom = this.fb.group({

});
  }


  public accept() {
    this.success.next('Record deleted successfully.');
  }

  /*on click search filter hide show on mobile*/
  openSearch() {
    this.showSearchContent = !this.showSearchContent;
  }


  /*on click modal will be open*/
  public openConfirmationModal() {
    this.confirmModalService.confirm('Confirm', 'Are you sure you want to deactivate: John Doe?')
  }


}

import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent implements OnInit {

  //@Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(
    private activeModal: NgbActiveModal,
    public alertService: AlertService
    ) { }

   /*succes message code here*/
   ngOnInit(): void {

  }


  public decline() {
    this.activeModal.close(false);
  }

  // public accept() {
  //   this.activeModal.close(true);
  // }

  public dismiss() {
    this.activeModal.dismiss();
  }


  showStandard() {
    this.alertService.show('I am a standard toast');
    this.activeModal.close(true);
  }

  showSuccess() {
    this.alertService.show('User deactivated successfully.', { classname: 'alert show alert-success fade alert-dismissible', delay: 3000 });
    this.activeModal.close(true);
  }

  showDanger() {
    this.alertService.show('dangerTpl', { classname: 'alert show alert-danger fade alert-dismissible', delay: 3000 });
    this.activeModal.close(true);
  }



}

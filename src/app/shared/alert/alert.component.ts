
import {Component, TemplateRef} from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
  // host: {'[class.ngb-toasts]': 'true'}
})
export class AlertComponent {


  constructor(public alertService: AlertService) {}

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}

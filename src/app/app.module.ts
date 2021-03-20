import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from 'src/app/services/alert.service';
import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,

    SortablejsModule.forRoot({
      animation: 150
    }),
  ],
  exports: [
    PhoneMaskDirective
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }

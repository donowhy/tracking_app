import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';

import { TrackingPage } from './tracking';

@NgModule({
  declarations: [
    TrackingPage,
  ],
  providers: [
    SQLite
  ],
  imports: [
    IonicPageModule.forChild(TrackingPage),
    TranslateModule.forChild()
  ],
  exports: [
    TrackingPage
  ]
})
export class TrackingPageModule { }

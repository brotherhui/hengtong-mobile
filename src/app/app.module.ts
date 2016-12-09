import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { MyArtTabsPage } from '../pages/myart-tabs/myart-tabs';
import { HomePage } from '../pages/home/home';
import { ColumnWithTabPage } from '../pages/column/column-with-tab';
import { ColumnWithMorePage } from '../pages/column/column-with-more';
import { LoginPage } from '../pages/login/login';
import { RegistPage } from '../pages/regist/regist';
import {ItemDetailsPage} from "../pages/item-details/item-details";

@NgModule({
  declarations: [
    MyApp,
    ColumnWithTabPage,
    ColumnWithMorePage,
    TabsPage,
    MyArtTabsPage,
    HomePage,
    LoginPage,
    RegistPage,
    ItemDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ColumnWithTabPage,
    ColumnWithMorePage,
    TabsPage,
    MyArtTabsPage,
    HomePage,
    LoginPage,
    RegistPage,
    ItemDetailsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }

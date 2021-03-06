import { Component, ViewChild } from '@angular/core';

import {NavController, Tabs, Events} from 'ionic-angular';

import { MyartTabsPage } from '../myart-tabs/myart-tabs-page';
import { UserLoginPage } from '../user-login/user-login-page';

import { TabModel } from '../../models/tab-model';
import { ColumnType } from '../../models/column-info-model';

import { ResourceService } from '../../services/basic/resource-service';
import { UserInfoService } from '../../services/business/user-info-service';

@Component({
  selector: 'column-tabs-page',
  templateUrl: 'column-tabs-page.html',
  providers: [ResourceService, UserInfoService]
})
export class ColumnTabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  tabs: Array<TabModel>;

  constructor(public navCtrl: NavController, public events: Events, private userInfoService: UserInfoService) {

    this.tabs = TabModel.buildTabs();

  }

  doSelected(tab) {
    if (ColumnType.MY == tab.columnInfoModel.columnType) {
      let userId = this.userInfoService.getUserId();
      console.log('hengtong-id is ' + userId);
      if (userId) {
        this.navCtrl.push(MyartTabsPage);
      } else {
        this.navCtrl.push(UserLoginPage);
      }
    }
  }

  goSelected(tabIndex) {
    this.tabRef.select(tabIndex);
  }

  goSelected2(tabIndex, subColumnIndex) {
    this.tabRef.select(tabIndex);
    this.events.publish('subColumn:selected', subColumnIndex);
  }

}

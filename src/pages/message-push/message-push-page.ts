import { Component } from '@angular/core';

import {NavController, NavParams, AlertController} from 'ionic-angular';

import { ResourceService } from '../../services/basic/resource-service';
import { MessageInfoService } from '../../services/business/message-info-service';
import { UserInfoService } from '../../services/business/user-info-service';

import { MessageInfoModel} from '../../models/message-info-model';
import {TabModel} from "../../models/tab-model";
import {ColumnTabsPage} from "../column-tabs/column-tabs-page";

@Component({
  selector: 'message-push-page',
  templateUrl: 'message-push-page.html',
  providers: [ResourceService, MessageInfoService, UserInfoService]
})
export class MessagePushPage {
  messageInfoModel: MessageInfoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private messageInfoService: MessageInfoService, private userInfoService: UserInfoService, private alertCtrl: AlertController) {
    this.messageInfoModel = new MessageInfoModel();
    this.messageInfoModel.userId = JSON.stringify(userInfoService.getUserId());
  }

  send() {
    if (this.messageInfoModel.feedbackContent) {
      this.messageInfoService.push(this.messageInfoModel).then(data => {
        if (data && 0 == data.errorCode) {
            this.showAlert("消息发送成功");
        } else {
          this.showAlert("消息发送失败");
        }
      });
    } else {
      this.showAlert("请输入留言信息");
    }
  }

  openHome() {
    TabModel.buildTabs();
    this.navCtrl.push(ColumnTabsPage);
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: '信息提示',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}

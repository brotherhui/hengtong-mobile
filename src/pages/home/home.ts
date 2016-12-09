import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { ContentInfoModel } from "../../models/content-info-model";

import { ResourceService } from "../../services/basic/resource-service";
import { ContentInfoService } from '../../services/business/content-info-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ResourceService, ContentInfoService]
})
export class HomePage {

  @ViewChild('mySlider') slider: Slides;

  legacy: string = "puppies";

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    pager: true
  };

  // 非遗动态
  contentInfosFXDT: Array<ContentInfoModel>;

  constructor(public navCtrl: NavController, private contentInfoService: ContentInfoService) {
    this.findTopContents(8);
  }

  goToSlide() {
    this.slider.slideTo(2, 500);
  }

  findTopContents(columnId) {
    this.contentInfoService.topList(columnId, 3).then(contentInfos => {
      this.contentInfosFXDT = contentInfos;
    });
  }

}
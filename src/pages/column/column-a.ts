import { Component } from '@angular/core';

import { NavController, NavParams, } from 'ionic-angular';

@Component({
  selector: 'column-a',
  templateUrl: 'column-a.html'
})
export class ColumnAPage {

  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    for (var i = 0; i < 30; i++) {
      this.items.push({ title: 'test', note: 'test', icon: 'http://d.ifengimg.com/q75/img1.ugc.ifeng.com/newugc/20161124/image/17/201_0gZKL05e08c_watermark0gZK2bN007O.jpg' });
    }
  }

  selectedSubTab = function() {

  }

  doRefresh = function(refresher) {
    refresher.complete();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      for (var i = 0; i < 30; i++) {
        this.items.push(this.items[i]);
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}

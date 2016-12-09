import { Injectable } from '@angular/core';
import {  } from '@angular/core';

import { ResourceService } from "../basic/resource-service";

import { ContentInfoModel } from "../../models/content-info-model";
import { PagingModel } from "../../models/paging-model";

@Injectable()
export class RecommandInfoService {

  apiUrl: string;
  pagingModel: PagingModel<ContentInfoModel>;
  imgQuery: {};

  constructor(private resourceService: ResourceService) {
    this.apiUrl = 'http://218.61.0.14:8080/dlqzysgweb/web/favoriteList';
    this.pagingModel = new PagingModel<ContentInfoModel>(50, 1);
    this.imgQuery={'isImag':1};
  }

  /**
   * 置顶查询
   */
  topList(columnId, count) {
    return this.resourceService.doGet(this.apiUrl + '/' + columnId + '/' + count + '/' + 1 , this.imgQuery).then(data => {
      if (data.result) {
        let contentInfos: Array<ContentInfoModel>;
        contentInfos = [];
        for (let i in data.result) {
          let contentInfo = new ContentInfoModel();
          Object.assign(contentInfo, data.result[i]);
          contentInfos.push(contentInfo);
        }
        return contentInfos;
      }
    });
  }

  /**
   * 栏目页分页查询
   */
  list(columnId) {
    return this.resourceService.doGet(this.apiUrl + '/' + columnId + '/' + this.pagingModel.reqCount + '/' + this.pagingModel.startIndex, null).then(data => {
      if (data.result) {
        let contentInfos: Array<ContentInfoModel>;
        contentInfos = [];
        for (let i in data.result) {
          let contentInfo = new ContentInfoModel();
          Object.assign(contentInfo, data.result[i]);
          contentInfos.push(contentInfo);
        }
        return this.pagingModel.refresh(data.dataCounts, contentInfos);
      }
    });
  }

}
import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
declare var jQuery:any;  //定义jquery
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { IndexService } from './index.service';
import { Category } from './model/category.model';
import { Info } from './model/info.model';
import { config } from '../../global/config';


@Component({
  selector: 'main-index',
  templateUrl: './index.component.html',
  styleUrls: [
              './index.component.scss',
              '../../../assets/jsPlug/nivo-slider/themes/default/default.css',
              '../../../assets/jsPlug/nivo-slider/themes/light/light.css',
              '../../../assets/jsPlug/nivo-slider/themes/dark/dark.css',
              '../../../assets/jsPlug/nivo-slider/themes/bar/bar.css',
              '../../../assets/jsPlug/nivo-slider/nivo-slider.css',
             ],
  providers: [IndexService],
  animations: []
})
export class IndexComponent implements OnInit {

    public categoryList:Array<Category>;
    public infoList:Array<Info>;
    public hotList:Array<Object>;
    

    private pageSize: number = config.pageSize;
    private currentPage: number = 1;
    public categoryData :object= {     //目录类型对象
        infoCategoryId:0
    };    

    
  	constructor(public indexService: IndexService) { 
        
    }
  	ngOnInit() {
        this.getInfoCategory();
        this.getInfoList(1);
        this.getHot();
  	}
    public categoryClick(id:number):void{
        this.categoryData = {
            infoCategoryId:id
        };
        this.getInfoList(1);
    }

    public getInfoCategory(){
        this.indexService.getInfoCategory().then((res)=>{
           if(res.code === 0){
               this.categoryList = res.data;
           }
        });
    }

    public getInfoList(currentPage){
        this.indexService.getInfoList(currentPage,this.pageSize,this.categoryData).then((res)=>{
            if(res.code === 0){
                let resData = res.data;
                this.infoList = resData.list;
                var counts = resData.recordCount; //总共的条数
                var pageCount = resData.pageCount > 0 ? resData.pageCount : 1; //总共的页数
                this.initPage(pageCount);
                // $scope.$broadcast('infoListsChange',$scope.infoLists)
            }
        });
    }

    /*
    *分页
    */
    public initPage(pages) {
        jQuery('#pagination').twbsPagination({
            totalPages: pages,
            visiblePages: 5,
            first: '首页',
            prev: '上一页',
            next: '下一页',
            last: '末页',
            onPageClick: (event, page)=>{
                this.getInfoList(page);
            }
        });
    }

    public spliceThree(index:number,type:number){
         return this.infoList.filter((item, index) => index > 2 )
    }

    public getHot(){
        this.indexService.getHot().then((res)=>{
            if(res.code === 0){
               this.hotList = res.data.data;
            }
        });
    }
}

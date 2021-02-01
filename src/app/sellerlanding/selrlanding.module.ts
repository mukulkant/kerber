import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SubscrptionComponent } from './subscrption/subscrption.component';
import { RatingreviewComponent } from './ratingreview/ratingreview.component';
import { AddnewofferComponent } from './addnewoffer/addnewoffer.component';
import { ManagereturnComponent } from './managereturn/managereturn.component';
import { BuyermsgComponent } from './buyermsg/buyermsg.component';
import { ReportsComponent } from './reports/reports.component';
import { ProductquestionComponent } from './productquestion/productquestion.component';
import { PromationComponent } from './promation/promation.component';
import { ProductreviewdetailComponent } from './productreviewdetail/productreviewdetail.component';
import { StoredetailComponent } from './storedetail/storedetail.component';

@NgModule({
  declarations: [AddproductComponent, SubscrptionComponent, RatingreviewComponent, AddnewofferComponent, ManagereturnComponent, BuyermsgComponent, ReportsComponent, ProductquestionComponent, PromationComponent, ProductreviewdetailComponent, StoredetailComponent],
  imports: [
    CommonModule
  ]
})
export class SellerlandingModule { }

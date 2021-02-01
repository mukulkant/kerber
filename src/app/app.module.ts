import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { MybagComponent } from './mybag/mybag.component';
import { ProductdetailclothComponent } from './productdetailcloth/productdetailcloth.component';
import { SellerreviewComponent } from './sellerreview/sellerreview.component';
import { CustreviewComponent } from './custreview/custreview.component';
import { QaComponent } from './qa/qa.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderloggedinComponent } from './headerloggedin/headerloggedin.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NotificationComponent } from './notification/notification.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { OrderfailComponent } from './orderfail/orderfail.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { ReturndetailsComponent } from './returndetails/returndetails.component';
import { OrdercompleteComponent } from './ordercomplete/ordercomplete.component';
import { MyorderComponent } from './myorder/myorder.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { SellerlandingComponent } from './sellerlanding/sellerlanding.component';
import { HeadersellerComponent } from './sellerlanding/headerseller/headerseller.component';
import { LeftnavComponent } from './sellerlanding/leftnav/leftnav.component';
import { DashboardComponent } from './sellerlanding/dashboard/dashboard.component';
import { StoreprofileComponent } from './sellerlanding/storeprofile/storeprofile.component';
import { ManageproductComponent } from './sellerlanding/manageproduct/manageproduct.component';
import { ManageorderComponent } from './sellerlanding/manageorder/manageorder.component';
import { AddnewofferComponent } from './sellerlanding/addnewoffer/addnewoffer.component';
import { AddproductComponent } from './sellerlanding/addproduct/addproduct.component';
import { BuyermsgComponent } from './sellerlanding/buyermsg/buyermsg.component';
import { ManagereturnComponent } from './sellerlanding/managereturn/managereturn.component';
import { ProductquestionComponent } from './sellerlanding/productquestion/productquestion.component';
import { ReportsComponent } from './sellerlanding/reports/reports.component';
import { RatingreviewComponent } from './sellerlanding/ratingreview/ratingreview.component';
import { SubscrptionComponent } from './sellerlanding/subscrption/subscrption.component';
import { PromationComponent } from './sellerlanding/promation/promation.component';
import { ProductreviewdetailComponent } from './sellerlanding/productreviewdetail/productreviewdetail.component';
import { StoredetailComponent } from './sellerlanding/storedetail/storedetail.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdmindashboardComponent } from './adminlanding/admindashboard/admindashboard.component';
import { ReportaComponent } from './adminlanding/reporta/reporta.component';
import { LeftnavaComponent } from './adminlanding/leftnava/leftnava.component';
import { HeaderadminComponent } from './adminlanding/headeradmin/headeradmin.component';
import { AlluseraComponent } from './adminlanding/allusera/allusera.component';
import { AllbuyeraComponent } from './adminlanding/allbuyera/allbuyera.component';
import { AllselleraComponent } from './adminlanding/allsellera/allsellera.component';
import { ManageorderaComponent } from './adminlanding/manageordera/manageordera.component';
import { ReturnaComponent } from './adminlanding/returna/returna.component';
import { Productreview1Component } from './adminlanding/productreview1/productreview1.component';
import { SellerreviewaComponent } from './adminlanding/sellerreviewa/sellerreviewa.component';
import { ReportreviewaComponent } from './adminlanding/reportreviewa/reportreviewa.component';
import { ManageproductreportaComponent } from './adminlanding/manageproductreporta/manageproductreporta.component';
import { ProductdetailsaComponent } from './adminlanding/productdetailsa/productdetailsa.component';
import { ManagecategoryaComponent } from './adminlanding/managecategorya/managecategorya.component';
import { ManagetemplateaComponent } from './adminlanding/managetemplatea/managetemplatea.component';
import { ManagecourierComponent } from './adminlanding/managecourier/managecourier.component';
import { AddcourierComponent } from './adminlanding/addcourier/addcourier.component';
import { ManageofferaComponent } from './adminlanding/manageoffera/manageoffera.component';
import { AddofferaComponent } from './adminlanding/addoffera/addoffera.component';
import { ManagepageaComponent } from './adminlanding/managepagea/managepagea.component';
import { AddpageaComponent } from './adminlanding/addpagea/addpagea.component';
import { AboutusaComponent } from './adminlanding/aboutusa/aboutusa.component';
import { ManagesubsaComponent } from './adminlanding/managesubsa/managesubsa.component';
import { SetsubsaComponent } from './adminlanding/setsubsa/setsubsa.component';
import { GeneralsettingComponent } from './adminlanding/generalsetting/generalsetting.component';
import { TncComponent } from './adminlanding/tnc/tnc.component';
import { PpolicyComponent } from './adminlanding/ppolicy/ppolicy.component';
import { ProductreportComponent } from './adminlanding/productreport/productreport.component';
import { LangsettingComponent } from './adminlanding/langsetting/langsetting.component';
import { CountryComponent } from './adminlanding/country/country.component';
import { CurrencyComponent } from './adminlanding/currency/currency.component';
import { EmailComponent } from './adminlanding/email/email.component';
import { GsettingComponent } from './adminlanding/gsetting/gsetting.component';
import { PaymentmethodComponent } from './adminlanding/paymentmethod/paymentmethod.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ProductdetailComponent,
    MybagComponent,
    ProductdetailclothComponent,
    SellerreviewComponent,
    CustreviewComponent,
    QaComponent,
    PaginationComponent,
    CheckoutComponent,
    HeaderloggedinComponent,
    CategorylistComponent,
    MyaccountComponent,
    NotificationComponent,
    PaymentComponent,
    OrdersuccessComponent,
    OrderfailComponent,
    SellerprofileComponent,
    OrderdetailComponent,
    ReturndetailsComponent,
    OrdercompleteComponent,
    MyorderComponent,
    MywishlistComponent,
    ChangepasswordComponent,
    LeftmenuComponent,
    DashboardComponent,
    HeadersellerComponent,
    LeftnavComponent,
    StoreprofileComponent,
    ManageproductComponent,
    ManageorderComponent,
    SellerlandingComponent,
    AddnewofferComponent,
    AddproductComponent,
    BuyermsgComponent,
    ManagereturnComponent,
    ProductquestionComponent,
    RatingreviewComponent,
    ReportsComponent,
    SubscrptionComponent,
    PromationComponent,
    ProductreviewdetailComponent,
    StoredetailComponent,
    AdminlandingComponent,
    AdmindashboardComponent,
    ReportaComponent,
    LeftnavaComponent,
    HeaderadminComponent,
    AlluseraComponent,
    AllbuyeraComponent,
    AllselleraComponent,
    ManageorderaComponent,
    ReturnaComponent,
    Productreview1Component,
    SellerreviewaComponent,
    ReportreviewaComponent,
    ManageproductreportaComponent,
    ProductdetailsaComponent,
    ManagecategoryaComponent,
    ManagetemplateaComponent,
    ManagecourierComponent,
    AddcourierComponent,
    ManageofferaComponent,
    AddofferaComponent,
    ManagepageaComponent,
    AddpageaComponent,
    AboutusaComponent,
    ManagesubsaComponent,
    SetsubsaComponent,
    GeneralsettingComponent,
    TncComponent,
    PpolicyComponent,
    ProductreportComponent,
    LangsettingComponent,
    CountryComponent,
    CurrencyComponent,
    EmailComponent,
    GsettingComponent,
    PaymentmethodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

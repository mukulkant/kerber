import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusaComponent } from './adminlanding/aboutusa/aboutusa.component';
import { AddcourierComponent } from './adminlanding/addcourier/addcourier.component';
import { AddofferaComponent } from './adminlanding/addoffera/addoffera.component';
import { AddpageaComponent } from './adminlanding/addpagea/addpagea.component';
import { AdmindashboardComponent } from './adminlanding/admindashboard/admindashboard.component';
import { AllbuyeraComponent } from './adminlanding/allbuyera/allbuyera.component';
import { AllselleraComponent } from './adminlanding/allsellera/allsellera.component';
import { AlluseraComponent } from './adminlanding/allusera/allusera.component';
import { CountryComponent } from './adminlanding/country/country.component';
import { CurrencyComponent } from './adminlanding/currency/currency.component';
import { EmailComponent } from './adminlanding/email/email.component';
import { GsettingComponent } from './adminlanding/gsetting/gsetting.component';
import { LangsettingComponent } from './adminlanding/langsetting/langsetting.component';
import { ManagecategoryaComponent } from './adminlanding/managecategorya/managecategorya.component';
import { ManagecourierComponent } from './adminlanding/managecourier/managecourier.component';
import { ManageofferaComponent } from './adminlanding/manageoffera/manageoffera.component';
import { ManageorderaComponent } from './adminlanding/manageordera/manageordera.component';
import { ManagepageaComponent } from './adminlanding/managepagea/managepagea.component';
import { ManagesubsaComponent } from './adminlanding/managesubsa/managesubsa.component';
import { ManagetemplateaComponent } from './adminlanding/managetemplatea/managetemplatea.component';
import { PaymentmethodComponent } from './adminlanding/paymentmethod/paymentmethod.component';
import { PpolicyComponent } from './adminlanding/ppolicy/ppolicy.component';
import { ProductreportComponent } from './adminlanding/productreport/productreport.component';
import { Productreview1Component } from './adminlanding/productreview1/productreview1.component';
import { ReportaComponent } from './adminlanding/reporta/reporta.component';
import { ReportreviewaComponent } from './adminlanding/reportreviewa/reportreviewa.component';
import { ReturnaComponent } from './adminlanding/returna/returna.component';
import { SellerreviewaComponent } from './adminlanding/sellerreviewa/sellerreviewa.component';
import { SetsubsaComponent } from './adminlanding/setsubsa/setsubsa.component';
import { TncComponent } from './adminlanding/tnc/tnc.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustreviewComponent } from './custreview/custreview.component';
import { LandingComponent } from './landing/landing.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MybagComponent } from './mybag/mybag.component';
import { MyorderComponent } from './myorder/myorder.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { NotificationComponent } from './notification/notification.component';
import { OrdercompleteComponent } from './ordercomplete/ordercomplete.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { OrderfailComponent } from './orderfail/orderfail.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductdetailclothComponent } from './productdetailcloth/productdetailcloth.component';
import { QaComponent } from './qa/qa.component';
import { ReturndetailsComponent } from './returndetails/returndetails.component';
import { AddnewofferComponent } from './sellerlanding/addnewoffer/addnewoffer.component';
import { AddproductComponent } from './sellerlanding/addproduct/addproduct.component';
import { BuyermsgComponent } from './sellerlanding/buyermsg/buyermsg.component';
import { DashboardComponent } from './sellerlanding/dashboard/dashboard.component';
import { ManageorderComponent } from './sellerlanding/manageorder/manageorder.component';
import { ManageproductComponent } from './sellerlanding/manageproduct/manageproduct.component';
import { ManagereturnComponent } from './sellerlanding/managereturn/managereturn.component';
import { ProductquestionComponent } from './sellerlanding/productquestion/productquestion.component';
import { ProductreviewdetailComponent } from './sellerlanding/productreviewdetail/productreviewdetail.component';
import { PromationComponent } from './sellerlanding/promation/promation.component';
import { RatingreviewComponent } from './sellerlanding/ratingreview/ratingreview.component';
import { ReportsComponent } from './sellerlanding/reports/reports.component';
import { StoredetailComponent } from './sellerlanding/storedetail/storedetail.component';
import { StoreprofileComponent } from './sellerlanding/storeprofile/storeprofile.component';
import { SubscrptionComponent } from './sellerlanding/subscrption/subscrption.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { SellerreviewComponent } from './sellerreview/sellerreview.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'productDetail', component: ProductdetailComponent },
  { path: 'productDetailCloth', component: ProductdetailclothComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'notification', component: NotificationComponent },  
  { path: 'categorylist', component: CategorylistComponent },  
  { path: 'productDetail/sellerReview', component: SellerreviewComponent },
  { path: 'productDetail/sellerProfile', component: SellerprofileComponent },
  
  { path: 'productDetail/custmrReview', component: CustreviewComponent },
  { path: 'productDetailCloth/custmrReview', component: CustreviewComponent },
  { path: 'productDetail/qa', component: QaComponent },
  { path: 'mybag/checkout', component: CheckoutComponent },
  { path: 'mybag/checkout/payment', component: PaymentComponent },
  { path: 'mybag/checkout/payment/ordersuccess/orderdetail', component:OrderdetailComponent },
  
  { path: 'mybag/checkout/payment/ordersuccess', component: OrdersuccessComponent },
  { path: 'mybag/checkout/payment/orderfail', component: OrderfailComponent },
  { path: 'returndetails', component: ReturndetailsComponent },
  { path: 'ordercomplete', component: OrdercompleteComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'myorder', component: MyorderComponent },
  { path: 'mywishlist', component: MywishlistComponent },
  { path: 'sellerlanding',
    children:[
      { path: '', component: DashboardComponent},
      { path: 'storeprofile', component: StoreprofileComponent},
      { path: 'manageproduct', component: ManageproductComponent},
      { path: 'manageorder', component: ManageorderComponent},
      { path: 'addnewoffer', component: AddnewofferComponent},
      { path: 'addproduct', component: AddproductComponent},
      { path: 'promation', component: PromationComponent},
      { path: 'buyermsg', component: BuyermsgComponent},
      { path: 'managereturn', component: ManagereturnComponent},
      { path: 'productquestion', component: ProductquestionComponent},
      { path: 'ratingreview', component: RatingreviewComponent},
      { path: 'reports', component: ReportsComponent},
      { path: 'subscrption', component: SubscrptionComponent},
      { path: 'protdetail', component: ProductreviewdetailComponent},
      { path: 'storedetail', component: StoredetailComponent},
    ]
  },
  
  { path: 'adminlanding',
    children:[
      { path: '', component: AdmindashboardComponent},
      { path: 'allusers', component: AlluseraComponent},
      { path: 'allbuyers', component: AllbuyeraComponent},
      { path: 'allsellers', component: AllselleraComponent},
      { path: 'order', component: ManageorderaComponent},
      { path: 'returns', component: ReturnaComponent},
      { path: 'productreview', component: Productreview1Component},
      { path: 'sellerreviewadmin', component: SellerreviewaComponent},
      { path: 'reportreview', component: ReportreviewaComponent}, 
      { path: 'productreport', component: ProductreportComponent}, 
      { path: 'managecategory', component: ManagecategoryaComponent}, 
      { path: 'managetemplate', component: ManagetemplateaComponent}, 
      { path: 'addcourier', component: AddcourierComponent}, 
      { path: 'managecourier', component: ManagecourierComponent}, 
      { path: 'manageoffer', component: ManageofferaComponent}, 
      { path: 'addoffer', component: AddofferaComponent}, 
      { path: 'managepage', component: ManagepageaComponent}, 
      { path: 'addpage', component: AddpageaComponent}, 
      { path: 'aboutus', component: AboutusaComponent}, 
      { path: 'termnmcondations', component: TncComponent}, 
      { path: 'policy', component: PpolicyComponent},
      { path: 'managesubs', component: ManagesubsaComponent},
      { path: 'reports', component: ReportaComponent},
      { path: 'setsubsrate', component: SetsubsaComponent},

      { path: 'langsetting', component: LangsettingComponent},
      { path: 'country', component: CountryComponent},
      { path: 'currency', component: CurrencyComponent},
      { path: 'email', component: EmailComponent},
      { path: 'setting', component: GsettingComponent},
      { path: 'paymentmethod', component: PaymentmethodComponent},
      

      
      
    ]
  },
  { path: 'mybag', component: MybagComponent },
  { path: '**', component: LandingComponent },
]
  // { path: '',   redirectTo: '/LandingComponent', pathMatch: 'full', component: LandingComponent, },
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GradeCartService } from '../../services/grade-cart.service';
import * as postscribe from 'postscribe'; // for ads


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit,AfterViewInit {

  gpa: number = 0;
  gpaRounded: number = 0;

  constructor(private gc: GradeCartService) { }

  ngOnInit() {
    let totalCredits = 0;
    let sum = 0;
    for(let g of this.gc.parsedGrades){
      sum += g.credit*g.gradePoint;
      totalCredits += g.credit;
    }

    sum /= totalCredits;
    totalCredits = Math.round(sum*100)/100;
    for(let i=0,j=0;i<=totalCredits;i+=0.01,j++){
      setTimeout(() => {
        this.gpa = i;
        this.gpaRounded = Math.round(i*100)/100;
      },j);
    }
    setTimeout(() => {
      this.gpa = sum;
      this.gpaRounded = Math.round(this.gpa*100)/100;
    },1010);
  }

  ngAfterViewInit(){
    postscribe('#adv1', `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=navsblo03-21&marketplace=amazon&region=IN&placement=9351472574&asins=9351472574&linkId=bef94568975c95f728fec8894d7c1fa0&show_border=true&link_opens_in_new_window=true"></iframe>`);
    postscribe('#adv2', `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=navsblo03-21&marketplace=amazon&region=IN&placement=9351472582&asins=9351472582&linkId=3dcbff0d49e8cb837f844b83da129ebc&show_border=true&link_opens_in_new_window=true"></iframe>`);
    postscribe('#adv3', `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=navsblo03-21&marketplace=amazon&region=IN&placement=9351472604&asins=9351472604&linkId=7e8dff050cc17c0c7e18bc0cabfcb4a2&show_border=true&link_opens_in_new_window=true"></iframe>`);
    postscribe('#adv4', `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=navsblo03-21&marketplace=amazon&region=IN&placement=9351472590&asins=9351472590&linkId=d016a47da0760832c3532df6bd5558a1&show_border=true&link_opens_in_new_window=true"></iframe>`);
    
  }


}

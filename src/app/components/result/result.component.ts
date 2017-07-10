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
    postscribe('#adv',`<script type="text/javascript" language="javascript">
      var aax_size='300x250';
      var aax_pubname = 'navsblo03-21';
      var aax_src='302';
    </script>
    <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>`);
  }


}

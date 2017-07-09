import { Component, OnInit, ViewChild } from '@angular/core';
import { GradeCartService } from '../../services/grade-cart.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

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

    this.gpa = sum/totalCredits;

    this.gpaRounded = Math.round(this.gpa*100)/100;
  }


}

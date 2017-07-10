import { Component, OnInit } from '@angular/core';
import { GradeCartService } from '../../services/grade-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  placeholder: string;
  resultString: string = '';

  constructor(private gc: GradeCartService) { }

  ngOnInit() {
    this.placeholder = "HS200(A+), MA202(A+), CS202(O), CS204(B+), CS206(A), CS232(A+), CS208(B+),CS234(A+)";
    this.gc.resetData();
  }

  parseString(){
    let p = this.gc.parseGradeString(this.resultString);
    console.log(p);
  }

}

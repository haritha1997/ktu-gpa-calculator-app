import { Component, OnInit } from '@angular/core';
import { GradeCartService } from '../../services/grade-cart.service';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {

  gradeList: any;
  isNewFormVisible: Boolean = false;
  newGrade: any;

  constructor(private gc: GradeCartService) { }

  ngOnInit() {
    this.gradeList = this.gc.parsedGrades;
    this.newGrade = {
      subjectCode: '',
      letterGrade: '',
      gradePoint: '',
      credit: ''
    };
  }

  test(){
    console.log(this.gc.parsedGrades);
  }

  toggleAddNewForm(){
    this.isNewFormVisible = !this.isNewFormVisible;
  }

  addNewGrade(){
    this.gradeList = this.gc.pushGrade(this.newGrade);
    this.toggleAddNewForm();
  }

}

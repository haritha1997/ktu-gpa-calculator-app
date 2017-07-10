import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GradeCartService {

  gradeString: string;
  parsedGrades: Grade[] = [];

  gradeValues: any;

  creditList: any;

  private creditDataURL: string = '/ktu-gpa-calculator-app/data.json';

  constructor(private http: Http) {
    this.gradeValues = {
      'O': 10,
      'A+': 9,
      'A': 8.5,
      'B+': 8,
      'B': 7,
      'C': 6,
      'P': 5,
      'F': 0
    };

    this.getCreditlist().subscribe(data => {
      this.creditList = data.data;
      // console.log(this.creditList);
    },
      err => console.log(err)
    );


   }

   getCreditlist(){
    return this.http.get(this.creditDataURL)
            .map((res) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

   getCreditForSubject(sub: string){
     sub = sub.toUpperCase();
     return this.creditList[sub.slice(0,2)][sub];
   }

   parseGradeString(gs:string){
    this.gradeString = gs;
    this.parsedGrades = [];

    const re = /(.{5})\((..|.)\)/g;
    var m;
    var grade:Grade;
    do {
      m = re.exec(gs);
      if (m) {

          grade = {
            subjectCode: m[1],
            letterGrade: m[2],
            gradePoint: this.getGradeValue(m[2]),
            credit: this.getCreditForSubject(m[1])
          };

          this.parsedGrades.push(grade);
      }
    } while (m);

    return this.parsedGrades;
     
   }

   getGradeValue(grade:string){
     let val =  this.gradeValues[grade];
     return val?val:0;
   }

   pushGrade(grade:Grade){
     grade.gradePoint = this.getGradeValue(grade.letterGrade);
     this.parsedGrades.push(grade);
     return this.parsedGrades;
   }

   resetData(){
     this.gradeString = '';
     this.parsedGrades = [];
   }

}


interface Grade{
  subjectCode: string;
  letterGrade: string;
  gradePoint?: number;
  credit?: number;
}
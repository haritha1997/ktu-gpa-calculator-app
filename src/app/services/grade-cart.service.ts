import { Injectable } from '@angular/core';

@Injectable()
export class GradeCartService {

  gradeString: string;
  parsedGrades: Grade[] = [];

  gradeValues: any;


  constructor() {
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
            credit: 0
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

}


interface Grade{
  subjectCode: string;
  letterGrade: string;
  gradePoint?: number;
  credit?: number;
}
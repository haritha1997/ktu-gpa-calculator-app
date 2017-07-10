import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreditFormComponent } from './components/credit-form/credit-form.component';
import { ResultComponent } from './components/result/result.component';
import { GradeCartService } from './services/grade-cart.service';


const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'credits', component: CreditFormComponent },
  { path: 'result', component: ResultComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditFormComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig),
    FormsModule,
    HttpModule,
  ],
  providers: [GradeCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

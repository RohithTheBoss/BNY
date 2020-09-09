import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  reportName: string
  showForm:boolean;
  showResults: boolean;
    constructor(private router: Router, private route: ActivatedRoute, private dataServ: DataShareService, private loadServ: NgxUiLoaderService) { }
  
    ngOnInit(): void {
      //this.loadServ.startLoader('results-loader')
      this.reportName = 'General - Adhoc Query';
      this.dataServ.reportTypeSubject.subscribe((reportType: string) => {
        this.reportName = reportType
      });
      this.showForm = true;
      this.dataServ.displayFormSub.subscribe((condition: boolean) => {
        console.log('showForm', condition)
        this.showForm = condition;  
      });
      this.showResults = false;
      this.dataServ.showResultsSub.subscribe((condition: boolean) => {
        this.showResults = condition;
      });

    }

    // onFormInit(dispalyCondition: boolean) {
    //   this.showForm = dispalyCondition
    // }

}

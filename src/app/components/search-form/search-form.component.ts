import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
reportName: string
messageTypes: string[];
statusList: string[];
settlementCurrencyList: string[];
settlementAmountFromList: string[];
settlementAmountToList: string[];
// showResults: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private dataServ: DataShareService) { }

  ngOnInit(): void {
    this.dataServ.displayFormSub.next(true);
    this.dataServ.showResultsSub.next(false);
    // this.reportName = 'General - Adhoc Query';
    // this.dataServ.reportTypeSubject.subscribe((reportType: string) => {
    //   this.reportName = reportType
    // })
    this.messageTypes = ['Message Type1','Message Type2','Message Type3','Message Type4','Message Type5'];
    this.statusList = ['status1','status2','status3','status4','status5']
    this.dataServ.prePopulateFormValues().subscribe((response: any[]) => {
        this.settlementCurrencyList = response[0],
        this.settlementAmountFromList = response[1],
        this.settlementAmountToList = response[2]
    });
   // console.log(currency)
  }
  // navigateToResults() {
  //   this.router.navigate(['/search-results'])

  // }
  onSubmit(form: NgForm) {
    console.log('form value',form.value)
    const inputPayload = {
      instructedDateFrom: form.value.settlementFromDate,
      InstructedDateTo: form.value.settlementToDate
    }
    console.log('input payload',inputPayload);
    this.dataServ.inputPayloadForResults = inputPayload;
   // this.showForm = false;
    //this.showResults = true;
    this.dataServ.showResultsSub.next(true);
    this.dataServ.displayFormSub.next(false);

    //this.router.navigate(['search-results'])

  }

}

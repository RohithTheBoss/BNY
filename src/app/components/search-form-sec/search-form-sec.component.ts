import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-form-sec',
  templateUrl: './search-form-sec.component.html',
  styleUrls: ['./search-form-sec.component.css']
})
export class SearchFormSecComponent implements OnInit {
  settlementCurrencyList: string[];
  settlementAmountFromList: string[];
  settlementAmountToList: string[];
    constructor(private router: Router, private route: ActivatedRoute, private dataServ: DataShareService) { }
  
    ngOnInit(): void {
      this.dataServ.displayFormSub.next(true);
      this.dataServ.showResultsSub.next(false);
      this.dataServ.prePopulateFormValues().subscribe((response: any[]) => {
          this.settlementCurrencyList = response[0],
          this.settlementAmountFromList = response[1],
          this.settlementAmountToList = response[2]
      });
    }
    onSubmit(form: NgForm) {
      console.log('form value',form.value)
      const inputPayload = {
        instructedDateFrom: form.value.settlementFromDate,
        InstructedDateTo: form.value.settlementToDate
      }
      console.log('input payload',inputPayload);
      this.dataServ.inputPayloadForResults = inputPayload;
      //this.showForm = false;
     // this.showResults = true;
     this.dataServ.showResultsSub.next(true);
    this.dataServ.displayFormSub.next(false);

}
}

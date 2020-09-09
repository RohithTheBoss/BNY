import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
searchResults: {amount: number, currency: string, transactionNo: number, instructedDate: string}[];
searchResultsAPIResponse: {amount: number, currency: string, transactionNo: number, instructedDate: string}[]
  constructor(private router: Router, private route: ActivatedRoute, private dataServ: DataShareService, private loaderServ: NgxUiLoaderService ) { }
  ngOnInit() {
    console.log('results inititated') 
    this.loaderServ.startLoader('results-loader');
    this.searchResults = [
      {
        amount: 5000,
        currency: 'USD',
        transactionNo: 1234567890,
        instructedDate: '2020-04-01'
      },
      {
        amount: 6000,
        currency: 'AUD',
        transactionNo: 1034567890,
        instructedDate: '2020-05-02'
      },
      {
        amount: 7000,
        currency: 'JPY',
        transactionNo: 1204567890,
        instructedDate: '2020-06-21'
      },
      {
        amount: 8000,
        currency: 'EUR',
        transactionNo: 1230567890,
        instructedDate: '2020-07-15'
      },
      {
        amount: 9000,
        currency: 'CNY',
        transactionNo: 1234067890,
        instructedDate: '2020-08-11'
      }
    ]
    console.log(this.dataServ.inputPayloadForResults)
    this.dataServ.getSearchResults(this.dataServ.inputPayloadForResults).subscribe((resp: any[])=> {
      this.loaderServ.stopLoader('results-loader');
      this.searchResultsAPIResponse = resp;
      console.log(this.searchResultsAPIResponse)
    }, (error: HttpErrorResponse) => {
      this.loaderServ.stopLoader('results-loader');
      console.log(error);
    })
  }
  navigateToForm() {
    this.router.navigate(['search'])
  }

}

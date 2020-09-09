import { Injectable } from '@angular/core';
import * as environment from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject, Subject } from 'rxjs';
import { mergeMap, tap, map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  resultsFetchPath="paymentInquirySerch"
  inputPayloadForResults: any;
  showResultsSub = new Subject<boolean>();
  displayFormSub = new Subject<boolean>();
  reportType: string
  reportTypeSubject = new Subject<string>();
  constructor(private http: HttpClient) { }

  getSearchResults(inputPayload: any): Observable<any> {
  // return this.http.post(environment.environment.API_URL + this.resultsFetchPath, inputPayload);  
   return this.http.get(environment.environment.API_URL + this.resultsFetchPath).pipe(delay(3000));  
  }

  prePopulateFormValues() {
      let currencies = this.http.get(environment.environment.API_URL + 'currency')
      let settlementAmountFrom = this.http.get(environment.environment.API_URL + 'settlementAmountFrom')
      let settlementAmountTo = this.http.get(environment.environment.API_URL + 'settlementAmountTo')
      return forkJoin([currencies, settlementAmountFrom, settlementAmountTo])
  }
}
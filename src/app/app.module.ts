import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReportsComponent } from './components/reports/reports.component';
import { SearchFormSecComponent } from './components/search-form-sec/search-form-sec.component';
import {NgxUiLoaderModule } from 'ngx-ui-loader'

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    MenuBarComponent,
    SearchResultsComponent,
    ReportsComponent,
    SearchFormSecComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

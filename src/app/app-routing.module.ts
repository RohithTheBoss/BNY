import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes= [
    {
        path:'',
        pathMatch: 'full',  
        redirectTo: '/search'
    },
    {
        path:'search',  
        component: ReportsComponent
    },
    {
        path:'search-results',
        component: SearchResultsComponent
    }
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
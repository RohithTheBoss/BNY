import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private dataServ: DataShareService) { }

  ngOnInit(): void {
  }
  onReportSelection(reportName: string) {
    this.dataServ.reportTypeSubject.next(reportName)
  }

}

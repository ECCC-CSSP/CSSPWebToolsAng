import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tvItems = ['allo', 'testin', 'rouge'];
  contents: TVItem[] = [];

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit() {
    this.title = 'bonjour';
    this.httpClient.get<TVItem[]>('api/tvitem?take=5&detail=r').subscribe(r => this.contents = r);
  }
}

export interface TVItem {
  TVItemID: number;
  TVLevel: number;
  TVPath: string;
  TVType: number;
  ParentID: number;
  IsActive: boolean;
  LastUpdateDate_UTC: Date;
  LastUpdateContactTVItemID: number;
  HasErrors: boolean;
  ValidationResults: string[];
  TVItemWeb: TVItemWeb;
  TVItemReport: TVItemReport;
}

export interface TVItemWeb {
  TVText: string;
  LastUpdateContactTVText: string;
  TVTypeText: string;
}

export interface TVItemReport {
  TVItemReportTest: string;
}

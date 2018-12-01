import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { QueryOptions } from './service/queryoptions';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';
import { TVItemExtraA } from './interfaces/generated/tvitemextraa.interface';
import { TVItem } from './interfaces/generated/tvitem.interface';

export interface Transaction {
  item: string;
  cost: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tvItemExtaAList: Observable<TVItemExtraA[]>;
  tvItemExtraAShortList: Observable<TVItemExtraA[]>;
  tvItemExtraA: TVItemExtraA;
  panelOpenState = false;
  tvItemList: Observable<TVItemExtraA[]>;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const apiService: ApiService<TVItemExtraA> = new ApiService<TVItemExtraA>(this.httpClient, 'api/tvitem');

    this.tvItemList = apiService.list(new QueryOptions('en', 0, 14, '', '', 'A'));
  }

  <button>testing</button>
  
  // LoadShortList(): void {
  //   const apiService2: ApiService<TVItemExtraA> = new ApiService(this.httpClient, 'api/tvitem');

  //   this.tvItemExtraAShortList = apiService2.list(new QueryOptions('en', 3, 5, '', '', 'ExtraA'));

  //   const apiService3: ApiService<TVItemExtraA> = new ApiService(this.httpClient, 'api/tvitem');

  //   apiService3.read(7, new QueryOptions('en', 0, 100, '', '', 'ExtraA')).subscribe(a => this.tvItemExtraA = a);

  // }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {
//   minutes = 0;
//   gender = 'female';
//   fly = true;
//   logo = 'https://angular.io/assets/images/logos/angular/angular.png';
//   heroes: string[] = ['Magneta', 'Celeritas', 'Dynama'];
//   inc(i: number) {
//     this.minutes = Math.min(5, Math.max(0, this.minutes + i));
//   }
//   male() { this.gender = 'male'; }
//   female() { this.gender = 'female'; }
//   other() { this.gender = 'other'; }
// }

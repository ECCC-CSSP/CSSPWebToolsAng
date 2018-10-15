import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { QueryOptions } from './service/queryoptions';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';
import { TVItemExtraB } from './interfaces/generated/tvitemextrab.interface';

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
  tvItems$: Observable<TVItemExtraB[]>;
  tvItemsShortList$: Observable<TVItemExtraB[]>;
  tvItem: TVItemExtraB;
  panelOpenState = false;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const apiService: ApiService<TVItemExtraB> = new ApiService<TVItemExtraB>(this.httpClient, 'api/tvitem');

    this.tvItems$ = apiService.list(new QueryOptions('fr', 0, 14, '', '', 'ExtraB'));
  }

  LoadShortList(): void {
    const apiService2: ApiService<TVItemExtraB> = new ApiService(this.httpClient, 'api/tvitem');

    this.tvItemsShortList$ = apiService2.list(new QueryOptions('fr', 3, 5, '', '', 'ExtraB'));

    const apiService3: ApiService<TVItemExtraB> = new ApiService(this.httpClient, 'api/tvitem');

    apiService3.read(7, new QueryOptions('fr', 0, 100, '', '', 'ExtraB')).subscribe(a => this.tvItem = a);

  }
}

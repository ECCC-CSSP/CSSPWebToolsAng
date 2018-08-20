import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TVItem, TVItemA } from './model/TVItem';
import { QueryOptions } from './service/queryoptions';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tvItems$: Observable<TVItem[]>;
  tvItemsShortList$: Observable<TVItem[]>;
  tvItem: TVItem;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const apiService: ApiService<TVItem> = new ApiService<TVItem>(this.httpClient, 'api/tvitem');

    this.tvItems$ = apiService.list(new QueryOptions('fr', 0, 140, '', '', ''));
  }

  LoadShortList(): void {
    const apiService2: ApiService<TVItem> = new ApiService(this.httpClient, 'api/tvitem');

    this.tvItemsShortList$ = apiService2.list(new QueryOptions('fr', 3, 5, '', '', ''));

    const apiService3: ApiService<TVItem> = new ApiService(this.httpClient, 'api/tvitem');

    apiService3.read(7, new QueryOptions('fr', 0, 100, '', '', '')).subscribe(a => this.tvItem = a);

  }

}

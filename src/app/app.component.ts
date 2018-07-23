import { Component, OnInit } from '@angular/core';
import { TVItemService } from './service/tvitem.service';
import { HttpClient } from '@angular/common/http';
import { TVItem } from './model/tvitem';
import { QueryOptions } from './service/queryoptions';
import { Observable } from '../../node_modules/rxjs';

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
    const tvItemService: TVItemService = new TVItemService(this.httpClient);

    this.tvItems$ = tvItemService.list(new QueryOptions(0, 100, null, null, null, 'w'));
  }

  LoadShortList(): void {
    const tvItemService2: TVItemService = new TVItemService(this.httpClient);

    this.tvItemsShortList$ = tvItemService2.list(new QueryOptions(null, 5, 'fr', null, null, 'w'));

    const tvItemService3: TVItemService = new TVItemService(this.httpClient);

    tvItemService3.read(7, new QueryOptions(null, null, 'fr', null, null, 'w')).subscribe(r => this.tvItem = r);

  }

}

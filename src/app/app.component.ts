import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { TVItem } from './model/TVItem';
// import { QueryOptions } from './service/queryoptions';
// import { Observable } from 'rxjs';
// import { ApiService } from './service/api.service';
import { fromEvent } from 'rxjs';
import { throttleTime, map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    const button = document.querySelector('button');
    fromEvent(button, 'click').pipe(
    )
      .subscribe(cl => console.log((<MouseEvent>cl).clientX));
  }

  // tvItems$: Observable<TVItem[]>;
  // tvItemsShortList$: Observable<TVItem[]>;
  // tvItem: TVItem;

  // constructor(private httpClient: HttpClient) {
  // }

  // ngOnInit() {
  //   const apiService: ApiService<TVItem> = new ApiService<TVItem>(this.httpClient, 'api/tvitem');

  //   this.tvItems$ = apiService.list(new QueryOptions('fr', 0, 140, '', 'TVText|EQ|Base', 'r'));
  // }

  // LoadShortList(): void {
  //   const apiService2: ApiService<TVItem> = new ApiService(this.httpClient, 'api/tvitem');

  //   this.tvItemsShortList$ = apiService2.list(new QueryOptions('fr', 3, 5, '', '', 'w'));

  //   const apiService3: ApiService<TVItem> = new ApiService(this.httpClient, 'api/tvitem');

  //   apiService3.read(7, new QueryOptions('fr', 0, 100, '', '', 'w')).subscribe(r => this.tvItem = r);

  // }

}

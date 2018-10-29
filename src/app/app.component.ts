// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { HttpClient } from '@angular/common/http';
// import { QueryOptions } from './service/queryoptions';
// import { Observable } from 'rxjs';
// import { ApiService } from './service/api.service';
// import { TVItem } from './interfaces/generated/tvitem.interface';

// export interface Transaction {
//   item: string;
//   cost: number;
// }


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   tvItems$: Observable<TVItem[]>;
//   tvItemsShortList$: Observable<TVItem[]>;
//   tvItem: TVItem;
//   panelOpenState = false;

//   constructor(private httpClient: HttpClient) {
//   }

//   ngOnInit() {
//     const apiService: ApiService<TVItem> = new ApiService<TVItem>(this.httpClient, 'api/tvitem');

//     this.tvItems$ = apiService.list(new QueryOptions('en', 0, 14, '', '', ''));
//   }

//   LoadShortList(): void {
//     const apiService2: ApiService<TVItem> = new ApiService(this.httpClient, 'api/tvitem');

//     this.tvItemsShortList$ = apiService2.list(new QueryOptions('en', 3, 5, '', '', ''));

//     const apiService3: ApiService<TVItem> = new ApiService(this.httpClient, 'api/tvitem');

//     apiService3.read(7, new QueryOptions('en', 0, 100, '', '', '')).subscribe(a => this.tvItem = a);

//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  heroes: string[] = ['Magneta', 'Celeritas', 'Dynama'];
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() { this.gender = 'male'; }
  female() { this.gender = 'female'; }
  other() { this.gender = 'other'; }
}

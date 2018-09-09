import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { HttpClient } from '@angular/common/http';
// import { TVItem, TVItemA } from './model/TVItem';
// import { QueryOptions } from './service/queryoptions';
// import { Observable } from 'rxjs';
// import { ApiService } from './service/api.service';

export interface Transaction {
  item: string;
  cost: number;
}

/**
 * The AppComponent is the root component of CSSPWebToolsAng
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * @property is static --- rouge
   */
  static rouge = 'lsiefj';

  // tvItems$: Observable<TVItem[]>;
  // tvItemsShortList$: Observable<TVItem[]>;
  // tvItem: TVItem;
  // panelOpenState = false;

  // constructor(private httpClient: HttpClient) {
  // }

  // ngOnInit() {
  //   const apiService: ApiService<TVItem> = new ApiService<TVItem>(this.httpClient, 'api/tvitem');

  //   this.tvItems$ = apiService.list(new QueryOptions('fr', 0, 140, '', '', ''));
  // }

  // LoadShortList(): void {
  //   const apiService2: ApiService<TVItem> = new ApiService(this.httpClient, 'api/tvitem');

  //   this.tvItemsShortList$ = apiService2.list(new QueryOptions('fr', 3, 5, '', '', ''));

  //   const apiService3: ApiService<TVItem> = new ApiService(this.httpClient, 'api/tvitem');

  //   apiService3.read(7, new QueryOptions('fr', 0, 100, '', '', '')).subscribe(a => this.tvItem = a);

  // }

  options: FormGroup;
  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    { item: 'Beach ball', cost: 4 },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 },
  ];

 /**
  * Construct a new AppComponent.
  *
  * @param fb passing a FormBuilder type form dependency injection
  *
  */
constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
      colorName: ['testiasdffesfaasdfasefaesfng', Validators.maxLength(12)],
      startDate: [new Date(2018, 3, 3)],
      myEmail: ['', Validators.email],
    });
  }

  /**
   * This is of course the good function as the name is showning
   *
   * @param aaa This is parameter aaa
   * @param bbb This is parameeter bbb
   *
   */
  goodFunct(aaa: string, bbb: number): string {
    return aaa + bbb.toString();
  }

  ngOnInit() {

  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }


  /** Gets the total cost of all transactions.  */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}

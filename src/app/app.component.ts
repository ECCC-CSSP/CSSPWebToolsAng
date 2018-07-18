import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
// import { MatTableDataSource } from '@angular/material';
// import { SelectionModel } from '@angular/cdk/collections';
// import { interval } from 'rxjs';
// import { map, pairwise } from 'rxjs/operators';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  /**
   *
   */
  constructor() {

  }

  ngOnInit() {
    this.title = 'eapp';
  }

  // aaa = 34;
  // tvItems: TVItem[] = [];
  // complexForm: FormGroup;
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // selection = new SelectionModel<PeriodicElement>(true, []);

  // theInter = interval(1000);

  // constructor(public fb: FormBuilder, public httpClient: HttpClient) {
  // }

  // onNgModelChange(event) {
  //   console.log('on ng model change', event);
  // }

  // ngOnInit() {
  //   this.title = 'bonjour';
  //   this.httpClient.get<TVItem[]>('api/tvitem?take=5&detail=r').subscribe(r => this.tvItems = r);

  //   this.complexForm = this.fb.group({
  //     userName: new FormControl(null, [Validators.required]),
  //     email: new FormControl('charles@sleif.com', [Validators.required, Validators.email]),
  //     passWord: new FormControl(null, [Validators.required, this.ValidatePassword]),
  //   });
  // }

  // submitForm(value: any) {
  //   console.log(value);
  // }

  // getErrorMessageUserName() {
  //   return this.complexForm.controls['userName'].hasError('required') ? 'You must enter a value for User Name' : '';
  // }
  // getErrorMessage() {
  //   return this.complexForm.controls['email'].hasError('required') ? 'You must enter a value for Email' :
  //     this.complexForm.controls['email'].hasError('email') ? 'Not a valid email' :
  //       '';
  // }
  // getErrorMessagePassword() {
  //   return this.complexForm.controls['passWord'].hasError('required') ? 'You must enter a value for Password' : '';
  // }

  // ValidatePassword(control: AbstractControl) {
  //   if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}/.test(control.value)) {
  //     return { validPassword: true };
  //   }
  //   return null;
  // }
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

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tvItems = ['allo', 'testin', 'rouge'];
  contents: TVItem[] = [];
  complexForm: FormGroup;
  constructor(public fb: FormBuilder, public httpClient: HttpClient) {
  }

  ngOnInit() {
    this.title = 'bonjour';
    this.httpClient.get<TVItem[]>('api/tvitem?take=5&detail=r').subscribe(r => this.contents = r);

    this.complexForm = this.fb.group({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl('charles@sleif.com', [Validators.required, Validators.email]),
      passWord: new FormControl(null, [Validators.required, this.ValidatePassword]),
    });
  }

  submitForm(value: any) {
    console.log(value);
  }

  getErrorMessageUserName() {
    return this.complexForm.controls['userName'].hasError('required') ? 'You must enter a value for User Name' : '';
  }
  getErrorMessage() {
    return this.complexForm.controls['email'].hasError('required') ? 'You must enter a value for Email' :
      this.complexForm.controls['email'].hasError('email') ? 'Not a valid email' :
        '';
  }
  getErrorMessagePassword() {
    return this.complexForm.controls['passWord'].hasError('required') ? 'You must enter a value for Password' : '';
  }

  ValidatePassword(control: AbstractControl) {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}/.test(control.value)) {
      return { validPassword: true };
    }
    return null;
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

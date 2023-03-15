import { PostalService } from './services/postal.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pincode-finder';
  pincode!: string;
  searchForm!: FormGroup;
  arrRes!: any;
  errorStatus!: string;
  errorMsg!: string;
  spinner: boolean = false;
  cYear: number = new Date().getFullYear();

  constructor(private _api: PostalService) {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      pincode: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[0-9]+$'),
      ]),
    });
  }
  getPinData(): any {
    this.spinner = true;
    this.errorMsg = '';
    this.pincode = this.searchForm.get('pincode')?.value;
    this._api.getData(this.pincode).subscribe(
      (res: any) => {
        this.arrRes = res;
        this.spinner = false;
        res.forEach((el: any) => {
          if (el.Status != 'Success') {
            this.errorStatus = 'Error';
            this.errorMsg = 'No Records Found!! Try different code.';
          } else {
            this.errorStatus = el.Status;
          }
        });
      },
      (error: any) => {
        this.spinner = false;
        this.errorMsg =
          'Something went wrong! Check your connection and try again.';
      }
    );
  }
}

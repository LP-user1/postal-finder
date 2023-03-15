import { PostalService } from './services/postal.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitPipe } from './pipes/split.pipe';

@NgModule({
  declarations: [AppComponent, SplitPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [PostalService],
  bootstrap: [AppComponent],
})
export class AppModule {}

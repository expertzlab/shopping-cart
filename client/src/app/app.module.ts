import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule } from '@angular/common/http';
import { FileuploadComponent } from './fileupload/fileupload.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ProductComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

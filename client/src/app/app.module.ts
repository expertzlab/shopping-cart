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
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule } from '@angular/material/toolbar'
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio'
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ImageAnimateComponent } from './image-animate/image-animate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterDirective } from './counter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ProductComponent,
    FileuploadComponent,
    ImageAnimateComponent,
    CounterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    MatButtonModule, MatMenuModule,  MatSidenavModule, MatToolbarModule, MatCheckboxModule, 
    MatRadioModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

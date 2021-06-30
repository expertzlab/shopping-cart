import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'product',component: ProductComponent},
  {path:'list', component: ListComponent},
  {path:'file-upload', component: FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

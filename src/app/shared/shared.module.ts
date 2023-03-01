import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe

  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }

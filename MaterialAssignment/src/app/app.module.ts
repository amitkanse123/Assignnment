import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from'@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { OperationComponent } from './operation/operation.component';
import {MatSortModule} from "@angular/material/sort"
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OperationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   MatToolbarModule,
     MatSortModule,
     MatTableModule,
     HttpClientModule,
     MatPaginatorModule,
     FormsModule
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

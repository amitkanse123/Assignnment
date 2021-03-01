import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FetchserviceService } from '../fetchservice.service';
import { Demo } from '../model/demo';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
  rowData: Demo[];
  dataSource: MatTableDataSource<Demo>;
  productname:any;
  public displayedColumns = [
    'id',
    'categoryd',
    'categoryname',
    'productname',
    'description',
    'rating',
    'price',
    'reviews',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private productService: FetchserviceService) {}
  ngOnInit() {
    this.productService.getdata().subscribe((data: any) => {
      this.rowData = data;
      this.dataSource = new MatTableDataSource<Demo>(this.rowData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  search() {
    var rowData = this.rowData.filter((row) =>
      (row.productname).toLowerCase().includes(this.productname.toLowerCase())
    );
    this.dataSource = new MatTableDataSource<Demo>(rowData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
} 
}

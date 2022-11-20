import { Component, OnInit, ViewChild } from '@angular/core';
import { RowDetailsDialogComponent } from 'src/app/dialogs/row-details-dialog/row-details-dialog.component';
import { RowElement } from 'src/app/interfaces/row-element';
import {MatDialog} from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';
import { ImageUploadDialogComponent } from 'src/app/dialogs/image-upload-dialog/image-upload-dialog.component';

const ELEMENT_DATA: RowElement[] = [
];

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent{

  @ViewChild(MatTable)
  table!: MatTable<RowElement>;


  displayedColumns: string[] = ['name', 'imgURL', 'width', 'height', 'select'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<RowElement>();

  constructor(public dialog: MatDialog) { }

  onClickedRow(row: RowElement) {
    console.log(row);
    this.dialog.open(RowDetailsDialogComponent, {
      data: row
    });
  }

  OnUploadImage(){
    const dialogRef = this.dialog.open(ImageUploadDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result`);
      
      if(result){
      
        const row: RowElement = {
          name: result.name,
          imgURL: result.imageURL,
          width: result.width,
          height: result.height,
          select: result.select
        }
        this.dataSource.push(row);
        console.log(this.dataSource);
        this.table.renderRows();
      }

    });


  }

}

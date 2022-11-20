import { Component, OnInit,  Inject} from '@angular/core';
import { RowElement } from 'src/app/interfaces/row-element';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-row-details-dialog',
  templateUrl: './row-details-dialog.component.html',
  styleUrls: ['./row-details-dialog.component.css']
})
export class RowDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RowElement) {}

  ngOnInit(): void {
  }

}

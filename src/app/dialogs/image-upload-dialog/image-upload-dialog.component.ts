import { Component, OnInit, Inject, NgModule} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RowElement } from 'src/app/interfaces/row-element';


@Component({
  selector: 'app-image-upload-dialog',
  templateUrl: './image-upload-dialog.component.html',
  styleUrls: ['./image-upload-dialog.component.css']
})
export class ImageUploadDialogComponent implements OnInit {

  imageURL = "";
  name = "";
  width = "";
  height = "";
  select = "";

  constructor() {}

  ngOnInit(): void {
  }

  onFileChange(event: any){
    console.log("file changed");
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => this.imageURL = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}

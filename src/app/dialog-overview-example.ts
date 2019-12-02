import { StarRatingColor } from './components/star-rating/star-rating.component';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})
// tslint:disable-next-line: component-class-suffix
export class DialogOverviewExample {

  animal: string;
  name: string;

  data: any;


  constructor(public dialog: MatDialog) {
    this.data = {
      price: '₹ 1,799.00',
      latestReviewDate: '2018-10-21T00:00:00.000Z',
      domain: 'amazon.in',
      imageUrl: 'https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg',
      name: 'Bluetooth Speakers',
      title: 'JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)',
      category: 'Bluetooth Speakers',
      productId: 'ABCD1234',
      createdAt: '2018-08-31T09:36:08.448Z',
      reviewCount: 3013,
      topScores: [{
              topic: 'Sound Quality',
              score: 4.6
          }, {
              topic: 'Bass',
              score: 4.2
          }, {
              topic: 'Design and Build',
              score: 4.2
          }, {
              topic: 'Battery Backup',
              score: 4.2
          }
      ]
    };
  }

  openDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '600px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class DialogOverviewExampleDialog {

  rating = 3;
  starCount = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRatingChanged(rating: number) {
    console.log(rating);
    this.rating = rating;
  }

  convertDateToString(dateString: string) {
    return new Date(dateString).toDateString();
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private selectedRow: any;

  constructor() { }

  setSelectedRow(row: any) {
    this.selectedRow = row;
  }

  getSelectedRow() {
    return this.selectedRow;
  }
}

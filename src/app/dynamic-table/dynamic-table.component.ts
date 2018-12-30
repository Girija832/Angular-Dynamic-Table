import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
}

import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FeedbackListComponent } from '../feedback-list/feedback-list.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnChanges {

  refreshGrid : boolean = false;
  isUpdate: boolean = false;
  updateId: string = '';
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }


  ngOnInit(): void {
  }

  refreshList($event:any){
    this.refreshGrid = true;
  }
  
  makeUpdate(id:string) {
    this.isUpdate = true;
    this.updateId = id;
  }

}

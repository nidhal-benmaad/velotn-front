import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit, OnChanges {

  feedbacks: any;
  currentIndex = -1;
  title = '';

  @Input() refreshGrid : boolean = false;
  @Output() updateEvent = new EventEmitter<string>();

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
      this.retrieveFeedbacks();
  }

  ngOnChanges(){
    if(this.refreshGrid){
      this.retrieveFeedbacks();
    } 
  }

  refreshList($event:any){
    this.retrieveFeedbacks();
  }

  retrieveFeedbacks(): void {
    this.feedbackService.getAll()
      .subscribe(
        data => {
          this.feedbacks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  update(feedback: any) {
    console.log(feedback._id)
    this.updateEvent.emit(feedback._id)

  }
  delete(feedback: any) {
    this.feedbackService.delete(feedback._id).subscribe(() => this.retrieveFeedbacks(), () => this.retrieveFeedbacks())
  }

}

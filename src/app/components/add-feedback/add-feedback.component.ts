import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit, OnChanges {
  feedback = {
    nom: '',
    prenom: '',
    mail: '',
    stars: '',
    detail: ''
  };
  submitted = false;

  @Output() refreshList = new EventEmitter();
  @Input() isUpdate: boolean = false;
  @Input() updateId: string = '';

  constructor(private feedbackService: FeedbackService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isUpdate + " " + this.updateId)
    if (this.isUpdate) {
      this.feedbackService.get(this.updateId).subscribe(
        data => this.feedback = {nom: data.nom, prenom: data.prenom, mail: data.mail, stars: data.stars, detail: data.detail}
      )
    }
  }

  ngOnInit(): void {
  }

  saveFeedback(): void {
    const pattern = new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[()-\s\./0-9]*$');
    const data = {
      nom: this.feedback.nom,
      prenom: this.feedback.prenom,
      mail: this.feedback.mail,
      stars: this.feedback.stars,
      detail: this.feedback.detail,
    };
    if (!this.isUpdate) {
      this.feedbackService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.refreshList.emit("refresh");
        },
        error => {
          console.log(error);
          this.submitted = true;
          this.refreshList.emit("refresh");
        });} else {
          this.feedbackService.update(this.updateId, data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.refreshList.emit("refresh");
        },
        error => {
          console.log(error);
          this.refreshList.emit("refresh");
        });
        }
  }

  newFeedback(): void {
    this.submitted = false;
    this.feedback = {
      nom: '',
      prenom: '',
      mail: '',
      stars: '',
      detail: ''
    };
  }

}

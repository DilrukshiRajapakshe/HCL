import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {


model: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {
  }

  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
}

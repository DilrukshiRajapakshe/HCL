import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit, AfterViewInit {

  @Input() student;
  @Output() backData: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) { }

  result = {
    isSuccess: false,
    data: {}
  }

  selectedStudent = {
    fname: '',
    lname: '',
    address: '',
    NIC: '',
    course: ' ',
    mobile: '',
    cfee: '',
    paymnets: [
      {
        month: 'January',
        amount: '',
        paid: false
      },
      {
        month: 'Febuary',
        amount: '',
        paid: false
      },
      {
        month: 'March',
        amount: '',
        paid: false
      },
      {
        month: 'May',
        amount: '',
        paid: false
      },
      {
        month: 'June',
        amount: '',
        paid: false
      },
      {
        month: 'July',
        amount: '',
        paid: false
      },
      {
        month: 'August',
        amount: '',
        paid: false
      },
      {
        month: 'September',
        amount: '',
        paid: false
      },
      {
        month: 'October',
        amount: '',
        paid: false
      },
      {
        month: 'November',
        amount: '',
        paid: false
      },
      {
        month: 'December',
        amount: '',
        paid: false
      }

    ]
  }

  ngOnInit() {
    this.selectedStudent = this.student;
    console.log(this.selectedStudent)

  }
  ngAfterViewInit(): void {
  }

  update() {
    this.result.data = this.selectedStudent;
    this.backData.emit(this.result);
    this.activeModal.close()
  }

  cancel() {
    this.result.isSuccess = false;
    this.backData.emit(this.result);
    this.activeModal.close()

  }


}

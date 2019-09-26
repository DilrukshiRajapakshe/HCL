import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min'
import { MatDialog } from '@angular/material/dialog';
import { UserUpdateComponent } from './user-update/user-update.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrintBillComponent } from './print-bill/print-bill.component';
import { Students } from './students';


@Component({
  selector: 'app-fee-portal',
  templateUrl: './fee-portal.component.html',
  styleUrls: ['./fee-portal.component.css']
})
export class FeePortalComponent implements OnInit, AfterViewInit {


  nostudent: boolean = false;
  constructor(private router: Router, private dialog: MatDialog, private modalService: NgbModal) {


  }
  filter() {
    this.router.navigate(['/filter'])
  }


  openDialog(): void {
    const modalRef = this.modalService.open(UserUpdateComponent);
  }
  openprint(): void {
    const modalRef = this.modalService.open(PrintBillComponent);
  }

  searchvalue = '';

  count = 0;
  pages = [];

  students = [];
  selectedStudent;


  ngOnInit() {
    let i = 1;
    Students.forEach(e => {
      this.pages.push(i);
      i += 1;
    });

    this.students = Students[0].st;
    this.resetstudent();
  }

  selectListFromPage(index) {
    this.students = Students[index - 1].st;

  }

  ngAfterViewInit() {
    let div = document.getElementById("chartContainer")
    let chart = new CanvasJS.Chart(div, {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Student Payment Progress"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "January" },
          { y: 55, label: "February" },
          { y: 50, label: "March" },
          { y: 65, label: "April" },
          { y: 95, label: "May" },
          { y: 68, label: "June" },
          { y: 28, label: "July" },
          { y: 34, label: "Augest" },
          { y: 45, label: "September" },
          { y: 0, label: "October" },
          { y: 0, label: "November" },
          { y: 0, label: "December" },
        ]
      }]
    });

    chart.render();
  }
  selectstudent(student) {
    this.selectedStudent = student;
    console.log(this.selectedStudent)
  }
  search() {
    let st = this.students.filter(x => {
      return x.NIC === this.searchvalue
    })
    if (st.length > 0) {
      this.selectedStudent = st[0]
    }
    else {
      this.nostudent = true;
      this.resetstudent();
    }

  }
  save() {
    this.resetstudent();
  }
  clear() {
    this.nostudent = false;
    this.resetstudent();
  }
  resetstudent() {
    this.selectedStudent = {
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
  }


}


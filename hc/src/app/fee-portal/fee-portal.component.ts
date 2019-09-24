import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min'


@Component({
  selector: 'app-fee-portal',
  templateUrl: './fee-portal.component.html',
  styleUrls: ['./fee-portal.component.css']
})
export class FeePortalComponent implements OnInit, AfterViewInit {


  nostudent: boolean = false;
  constructor() {

  }
  searchvalue = '';
  students = [
    {
      fname: 'bandara',
      lname: 'kumara',
      address: '2131,perera mtw,ambara',
      NIC: '95245566V',
      course: 'web ',
      mobile: '0773557838',
      cfee: '25000.00',
      paymnets: [
        {
          month: 'January',
          amount: '5345',
          paid:false
        },
        {
          month: 'Febuary',
          amount: '555',
          paid:false
        },
        {
          month: 'March',
          amount: '22',
          paid:false
        },
        {
          month: 'May',
          amount: '',
          paid:false
        },
        {
          month: 'June',
          amount: '',
          paid:false
        },
        {
          month: 'July',
          amount: '',
          paid:false
        },
        {
          month: 'August',
          amount: '',
          paid:false
        },
        {
          month: 'September',
          amount: '',
          paid:false
        },
        {
          month: 'October',
          amount: '',
          paid:false
        },
        {
          month: 'November',
          amount: '',
          paid:false
        },
        {
          month: 'December',
          amount: '',
          paid:false
        }


      ]
    },
    {
      fname: 'hikka',
      lname: 'kusal',
      address: '2,bomulla mtw,ragama',
      NIC: '95263736V',
      course: 'data entry',
      mobile: '077245533',
      cfee: '5000.00',
      paymnets: [
        {
          month: 'January',
          amount: '22234',
          paid:false
        },
        {
          month: 'Febuary',
          amount: '',
          paid:false,
        },
        {
          month: 'March',
          amount: '',
          paid:false
        },
        {
          month: 'May',
          amount: '',
          paid:false
        },
        {
          month: 'June',
          amount: '',
          paid:false
        },
        {
          month: 'July',
          amount: '',
          paid:false
        },
        {
          month: 'August',
          amount: '',
          paid:false
        },
        {
          month: 'September',
          amount: '',
          paid:false
        },
        {
          month: 'October',
          amount: '',
          paid:false
        },
        {
          month: 'November',
          amount: '',
          paid:false
        },
        {
          month: 'December',
          amount: '',
          paid:false
        }

      ]
    },
    {
      fname: 'nikka',
      lname: 'ranasignhe',
      address: '53,kumara rodaya mtw,balangoda',
      NIC: '7234566V',
      course: 'beatuty ',
      mobile: '076552288',
      cfee: '45000.00',
      paymnets: [
        {
          month: 'January',
          amount: '',
          paid:false
        },
        {
          month: 'Febuary',
          amount: '',
          paid:false
        },
        {
          month: 'March',
          amount: '',
          paid:false
        },
        {
          month: 'May',
          amount: '',
          paid:false
        },
        {
          month: 'June',
          amount: '',
          paid:false
        },
        {
          month: 'July',
          amount: '',
          paid:false
        },
        {
          month: 'August',
          amount: '',
          paid:false
        },
        {
          month: 'September',
          amount: '',
          paid:false
        },
        {
          month: 'October',
          amount: '',
          paid:false
        },
        {
          month: 'November',
          amount: '',
          paid:false
        },
        {
          month: 'December',
          amount: '',
          paid:false
        }
      ]
    },
  ]
  selectedStudent;


  ngOnInit() {
    this.resetstudent();
    
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
          paid:false
        },
        {
          month: 'Febuary',
          amount: '',
          paid:false
        },
        {
          month: 'March',
          amount: '',
          paid:false
        },
        {
          month: 'May',
          amount: '',
          paid:false
        },
        {
          month: 'June',
          amount: '',
          paid:false
        },
        {
          month: 'July',
          amount: '',
          paid:false
        },
        {
          month: 'August',
          amount: '',
          paid:false
        },
        {
          month: 'September',
          amount: '',
          paid:false
        },
        {
          month: 'October',
          amount: '',
          paid:false
        },
        {
          month: 'November',
          amount: '',
          paid:false
        },
        {
          month: 'December',
          amount: '',
          paid:false
        }

      ]
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-window-popup',
  templateUrl: './window-popup.component.html',
  styleUrls: ['./window-popup.component.css']
})
export class WindowPopupComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

import { Component, OnInit, Inject } from '@angular/core';


import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { WindowPopupComponent } from './window-popup/window-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog, private modalService: NgbModal) { }

  emailMo = '';
  isValid: boolean = true;
  private regex: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  login() {
    if (this.regex.test(this.emailMo)) {
      this.router.navigate(['/home'])
    } else {
      this.isValid = false;
    }

  }
  openDialog(): void {
    const modalRef = this.modalService.open(WindowPopupComponent);
  }

  reset() {
    this.isValid = true;
  }

  ngOnInit() {

  }






}






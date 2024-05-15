import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-case-study',
  templateUrl: './add-case-study.component.html',
  styleUrl: './add-case-study.component.css'
})
export class AddCaseStudyComponent {
  formAddVisit: FormGroup;
  vitalSignCollapse = false;
  constructor(private formBuilder: FormBuilder,) { 
    this.formAddVisit = this.formBuilder.group({
      id: [0],
      appointmentId: [0],
      roomId: [null],
      visitDate: [new Date(), [Validators.required]],
      // visitReason: [null, [Validators.required, this.shareService.inputNoWhitespace]],
      visitReason: [null, [Validators.required]],
      // codeVisit: [''],
      // doctorId: [null],
      // collatoraborId: [null],
      // visitServices: [null],
      // heartBeat: [null],
      // temperature: [null],
      // spo2: [null],
      // bloodPressureMin: [null],
      // bloodPressureMax: [null],
      // height: [null],
      // weight: [null],
      // isCheckBalance: [true],
      // isPromoted: [false],
      // note: [''],
      // diagnoseInit: [''],
      // visitDiseases: [[], []],
    });
  } 
  get visitFormCtrl() {
    return this.formAddVisit.controls;
  }
  vitalInfoCollapse() {
    this.vitalSignCollapse = !this.vitalSignCollapse;
  }

}

import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Visits } from 'src/app/models/listVisit.class';
@Component({
  selector: 'app-case-study-info',
  templateUrl: './case-study-info.component.html',
  styleUrl: './case-study-info.component.css'
})
export class CaseStudyInfoComponent {
  _visit!: Visits;
  @Output() visitChange = new EventEmitter();
  @Input() set visit(data: any) {
    if (data) {
      this._visit = data;
    }
  }
  get visit() {
    return this._visit;
  }
  constructor(){
    
  }
  getVisitStatus() {
    // const currentStatus = Object.values(this.VISIT_STATUS).find((e) => e.value == this.visit.status);
    // return currentStatus ? currentStatus.text : 'Không xác định';
  }
}

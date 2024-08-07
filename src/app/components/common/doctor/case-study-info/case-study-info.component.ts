import { Component,Input,Output,EventEmitter ,SimpleChanges} from '@angular/core';
import { Visits } from 'src/app/models/listVisit.class';
@Component({
  selector: 'app-case-study-info',
  templateUrl: './case-study-info.component.html',
  styleUrl: './case-study-info.component.css'
})
export class CaseStudyInfoComponent {
  _visit!: Visits;
  @Input() caseStudy:any
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
    console.log(this.caseStudy)
  }
  
  ngOnInit() {
    console.log(this.visit); // Ensure visit is initialized properly
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['caseStudy'] && changes['caseStudy'].currentValue) {
      this.getVisit(changes['caseStudy'].currentValue);
      console.log(this.caseStudy)
    }
  }
  getVisit(caseStudy: any){
    this.visit=caseStudy
  }
  getVisitStatus() {

  }
}

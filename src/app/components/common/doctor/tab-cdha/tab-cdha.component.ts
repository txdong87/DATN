import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tab-cdha',
  templateUrl: './tab-cdha.component.html',
  styleUrl: './tab-cdha.component.css'
})
export class TabCDHAComponent implements OnChanges{
  @Input() caseStudy: any;
 
  subclinicalResultOfVisit :any;
  constructor(){
    console.log(this.caseStudy)
    this.subclinicalResultOfVisit=[{
      "id": null,
      "subClinicalVisitId": "65e160a68643cdf1899d0382",
      "visitId": "65e1609f8643cdf1899d037e",
      "refVisitId": null,
      "subClinicalOrderId": null,
      "keyImages": null,
      "reports": null,
      "conclusion": null,
      "description": "CT",
      "readDoctor": null,
      "technician": null,
      "appprovedDoctor": null,
      "createdDate": "0001-01-01T00:00:00+07:00",
      "name": "Chụp CT 1207",
      "visitDate": "2024-03-01T11:57:14+07:00",
      "pacsUrl": null,
      "source": 1,
      "referenceId": "1e49152447"
  }]
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['caseStudy'] && changes['caseStudy'].currentValue) {
      this.loadCaseStudyData(changes['caseStudy'].currentValue);
      console.log(this.caseStudy)
    }
  }
  loadCaseStudyData(caseStudy: any){

  }
}

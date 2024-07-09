import { PatientService } from '../../../services/patient.service';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { SearchCaseStudy,INIT_SEARCH_CASE_STUDY, } from 'src/app/models/search-case-study';
import { MenuItem } from 'primeng/api';import { DataSharingService } from 'src/app/shared/data-sharing.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ktv',
  templateUrl: './ktv.component.html',
  styleUrl: './ktv.component.css'
})
export class KTVComponent {
  selectedCdha: any;
  constructor(private dataShareService: DataSharingService,private router: Router) {
    this.selectedCdha = this.dataShareService.getSelectedRow();
  }
  ngOnInit() {
    if (history.state && history.state.selectedRow) {
      this.selectedCdha = history.state.selectedRow;
    } else {
      this.selectedCdha = this.dataShareService.getSelectedRow();
    }
  }
  handleSelectedCdha(event: any) {
    this.selectedCdha = event;
    this.router.navigate(['/ktv/perform-cdha'], { state: { selectedCdha: event } });
  }
}

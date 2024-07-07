import { PatientService } from '../../../services/patient.service';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { SearchCaseStudy,INIT_SEARCH_CASE_STUDY, } from 'src/app/models/search-case-study';
import { MenuItem } from 'primeng/api';import { DataSharingService } from 'src/app/shared/data-sharing.service';
@Component({
  selector: 'app-ktv',
  templateUrl: './ktv.component.html',
  styleUrl: './ktv.component.css'
})
export class KTVComponent {
  selectedCdha: any;
  constructor(private dataShareService: DataSharingService) {
    this.selectedCdha = this.dataShareService.getSelectedRow();
  }
  handleSelectedCdha(cdhaData: any) {
    console.log('Selected CDHA:', cdhaData);
    this.selectedCdha = cdhaData;
  }
}

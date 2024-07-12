import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case-study-detail',  
  templateUrl: './case-study-detail.component.html',
  styleUrl: './case-study-detail.component.css'
})
export class CaseStudyDetailComponent {
  @Input() editingFlag = false;
  @Output() editingFlagChange = new EventEmitter();
  disabledEditInfo: boolean = false;
  @Input() caseStudy: any;
 
  visit: any = {
    clinicalInfomation: '',
    diagnoseInit: '',
    conclusion: '',
    diseases: [],
    groupId: 1,
    id: 1
  };
  isVisibleView = false;
  rosIdSelected = '';
  suggestDiseases: any;
  diseasesData: any[] = [];
  subOrderSource: any[] = [];
  filterSubItem: any;
  rosConstant: any = {
    Imaging: 'Imaging',
    Laboratory: 'Laboratory'
  };
  isShowRelatedVisit: boolean = false;
  subClinicalVisit: any[] = [];
  lstRelatedVisitDisplay: any[] = [];
  services: any[] = [];
  rooms: any[] = [];
  visibleAddService: boolean = false;
  objService: any = { serviceId: null, roomId: null };
  hienGiaDichVuChiDinh: boolean = true;
  notPrintAll: boolean = false;
  notPrintAll2: boolean = false;
  visibleSubOrderGroupAdd: boolean = false;
  showAddSubOrder: boolean = false;
  subClinicalVisitModal: any;
  visibleDiscount: boolean = false;
  currentOrdersDiscount: any;
  visitOtherInfoPopupData: any;
  constructor(){

  }
  onTypingClinicalInfo(event: any) { }
  clickTosaveVisitInfo(field: string) { }
  onTypingDiagnoseInit(event: any) { }
  switchStatus(data:any) {
    if (this.editingFlag || this.disabledEditInfo || !data.canEdit) {
      data.isEditing = false;
    } else {
      data.isEditing = !data.isEditing;
      this.editingFlag = data.isEditing;
      this.editingFlagChange.emit(data.isEditing);
    }
  }
  showModalAddSubOrder(title:any) {
    this.showAddSubOrder = true;
    this.subClinicalVisitModal = this.subClinicalVisit.filter((en) => en.isDisabled == false);
  }
  showModalSubOrderGroup() {
    this.visibleSubOrderGroupAdd = true;
  }

  addSubOrder(id:any) {
    // if (this.shareService.checkEmpty(id)) {
    //   return;
    // }
    let subClinicalOrders = [
      {
        subClinicalOrderId: id,
        amount: 1,
      },
    ];
    this.apiAddOrder(subClinicalOrders);
  }
  cancelModalAddSubOrder() {
    this.showAddSubOrder = false;
    this.rosIdSelected = '';
    this.subClinicalVisitModal = [];
  }
  loadData() {
    // this.getSubClinicalVisitByRelated();
    // this.getMedicalOrderByVisitId();
  }
  apiAddOrder(subClinicalOrders:any) {
    // const payload = {
    //   visitId: this.visit.id,
    //   subClinicalOrders: subClinicalOrders,
    // };
    // this.subClinicalVisitService.addSubClinicalVisit(payload).subscribe((res) => {
    //   if (res.isValid) {
    //     this.notificationService.showNotification(Constant.NOTIFY_TYPE.SUCCESS, 'Cập nhật chỉ định thành công!');
    //     this.titleTabChange();
    //   } else {
    //     this.notificationService.showNotification(Constant.NOTIFY_TYPE.ERROR, res.errors[0].errorMessage);
    //   }
    // });
  }

  getSubOrder() {
    // this.subclinicalorderService.filterByWeight().subscribe((data) => {
    //   this.subOrderSource = data;
    // });
  }

  titleTabChange() {
    // this.titleTabRefresh.emit(Constant.TabTitleInsideVisitDetail.All);
  }
  showAddService() {
    this.visibleAddService = true;
    this.objService = {
      serviceId: '',
      roomId: '',
    };
  }
  showVisitOtherInfo(){
    this.visitOtherInfoPopupData = {...this.visitOtherInfoPopupData, isVisible:true, data:this.visit}
  }
  updateAmount(elementId:any, id:any) {
    let data = this.subClinicalVisit.find((en) => en.id == id);
    if (elementId != 'sub-' + data.id && elementId != 'memu-context') {
      data.isEditing = false;
      this.editingFlag = false;
      this.editingFlagChange.emit(false);

      // let oldAmount = this.subClinicalVisitCustomSource.find((en) => en.id == data.id).amount;
      // if (data.amount < 0) data.amount = oldAmount;
      // else if (data.amount > oldAmount) {
      //   this.updateSubclinicalVisit(data);
      // } else if (data.canRemove && data.canEdit) {
      //   this.cancelSubclinicalVisit(oldAmount, data);
      // } else data.amount = oldAmount;
    }
  }
}

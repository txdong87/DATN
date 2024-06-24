import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-cls',
  templateUrl: './add-cls.component.html',
  styleUrl: './add-cls.component.css'
})
export class AddClsComponent {
  @Input() isVisible = false;
  @Input() visitId = '';
  @Input() getHISServicePrice = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  private _rosIdSelected = '';
  @Input()
  get rosIdSelected() {
    return this._rosIdSelected;
  }
  set rosIdSelected(value) {
    this._rosIdSelected = value;
    this.setSelectedNode();
  }
  private _subClinicalVisit = [];
  @Input()
  get subClinicalVisit() {
    return this._subClinicalVisit;
  }
  set subClinicalVisit(data) {
    this._subClinicalVisit = data;
    if (data != null) {
      this.lstServiceChecked = data;
      // this.totalSubclinical = this.getTotal();
    }
  }

  @Output() cancelModal = new EventEmitter<any>();
  @Output() refreshData: EventEmitter<any> = new EventEmitter();
  @Output() cancelSubclinicalVisit: EventEmitter<any> = new EventEmitter();

  treeSource = [];
  serviceFilter = [];
  serviceSearch = [];
  lstServiceChecked = [];
  totalSubclinical = 0;

  textSearch = '';
  curCategoryId = 0;
  isSaving = false;
  constructor(){

  }
  setSelectedNode() {
    // this.serviceFilter = [];
    // this.serviceSearch = [];

    // this.treeSource.forEach((en) => {
    //   if (en.id == this.rosIdSelected) {
    //     en.isExpand = true;
    //     this.serviceFilter = this.traversalGetNodeSelectedData(en.children);
    //     this.serviceSearch = this.serviceFilter;
    //     return;
    //   } else {
    //     en.isExpand = false;
    //   }
    // });
  }
  handleCancel() {
    this.isVisible = false;
    this.cancelModal.emit();
    this.textSearch = '';
    this.rosIdSelected = '';
    // this.lstServiceChecked = JSON.parse(JSON.stringify(this.subClinicalVisit));
    // this.totalSubclinical = this.getTotal();
  }
  getTotal(){

  }
  selectdNodeEvent(event:any){

  }
  onSearch(){

  }
  addNewItem(item:any){

  }
  updateOrder(){

  }
  removeData(item:any){

  }

}

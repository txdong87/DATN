export interface Visits {
  stt: string;
  sttsearchresult: string;
  id: string;
  patientId: string;
  patientName: string;
  patientCode: string;
  groupId: string;
  doctorId: string;
  creatorId: string;
  patientSex: string;
  patientSexText: string;
  yob: number;
  dob: string;
  dobString: string;
  phoneNo: string;
  address: string;
  visitDate: Date;
  visitReason: string;
  visitTypeText: string;
  visitEndDate: Date;
  color: string;
  shortName: string;
  age: number;
  imageUrl: string;
  diseases: any[];
  doctorName: string;
  groupName: string;
  images: [];
  documents: [];
  pdfDocuments: [];
  avatar?: string;
  clinicalInfomation: string;
  conclusion: string;
  tags: string[];
  dateOfDiagnosis: Date;
  dateOfSymptom: Date;
  doctorInCareDoct: string;
  nursingInCare: string;
  examinedStatus: boolean;
  examinedByDoctorId: string;
  examinedByDoctorName: string;
  status?: number;
  bhytCode?: string;
  validDate?: Date;
  expireDate?: Date;
  isReceived?: boolean;
  refVisitId?: string;
  diagnoseInit?:string;
}

// export class SearchVisit {
//   keyword: string;
//   patientName: string;
//   address: string;
//   phone: string;
//   patientCode: string;
//   doctorName: string;
//   from: string;
//   to: string;
//   inGroup: boolean;
//   pageSize?: number;
//   page?: number;
//   newId: string;
//   groupId: string;
// }

export class SearchVisitSmall {
  patientName: any;
  patientCode: any;
  visitDate: any;
  visitStatus: any;
  inGroup?: boolean;
  pageSize?: number;
  page?: number;
  groupId?: string;
  roomId?: string;
  isReceived?:any;
}

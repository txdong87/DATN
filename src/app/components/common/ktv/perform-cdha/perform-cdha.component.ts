import { MessageService ,PrimeNGConfig} from 'primeng/api';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { DataSharingService } from 'src/app/shared/data-sharing.service';
import { CDHACaseStudyService } from 'src/app/services/cdha-case-study.service';


@Component({
  selector: 'app-perform-cdha',
  templateUrl: './perform-cdha.component.html',
  styleUrls: ['./perform-cdha.component.css']
})
export class PerformCDHAComponent implements OnInit,OnChanges {
  @Input() selectedCdha: any; 
  patientInformation:FormGroup
  // procedure:FormGroup
  cdhaForm:FormGroup;
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string | any;
  public videoWidth = 640;
  public videoHeight = 480;
  public errors: WebcamInitError[] = [];
  options: any = [];
  loading = false;
  selectedPatient:any
  public webcamImage: WebcamImage | undefined;
  public capturedImages: WebcamImage[] = [];

  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  reportImages: any[] = [];
  files: File[] = [];
  totalSize : number = 0;
  totalSizePercent : number = 0;
  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private messageService:MessageService,
    private config: PrimeNGConfig,
    private dataShareService:DataSharingService,
    private cdhaCaseStudyService:CDHACaseStudyService
  ) {
    this.patientInformation=this.fb.group({
          name: ['', Validators.required],
          dob: ['', Validators.required],
          gender: ['', Validators.required],
          diagnosis: ['', Validators.required],
          address: ['', Validators.required]
        }),
    // this.procedure= this.fb.group({
    //       description: new FormControl('', Validators.required),
    //       notes: new FormControl('', Validators.required)
    //     }),
        this.cdhaForm = this.fb.group({
          caseStudyId: ['', Validators.required],
          medicalCdhaId: ['', Validators.required],
          reportId: ['', Validators.required],
          conclusion: ['', Validators.required],
          description: ['', Validators.required],
          imageName: [''],
          imageLink: ['']
        });
    // this.reportForm = this.fb.group({
    //   patientInformation: this.fb.group({
    //     name: ['', Validators.required],
    //     age: ['', Validators.required],
    //     gender: ['', Validators.required],
    //     diagnosis: ['', Validators.required],
    //     address: ['', Validators.required]
    //   }),
    //   procedure: this.fb.group({
    //     description: ['', Validators.required],
    //     notes: ['', Validators.required]
    //   }),
    //   conclusion: this.fb.group({
    //     summary: ['', Validators.required],
    //     recommendations: ['', Validators.required]
    //   }),
    //   doctorInformation: this.fb.group({
    //     name: ['', Validators.required],
    //     signature: ['', Validators.required],
    //     date: ['', Validators.required]
    //   })
    // })

    this.options = [
      { label: "Nam", value: 'male' },
      { label: 'Nữ', value: 'female' }
    ]

    this.webcamImage = {} as WebcamImage;
  }

  ngOnInit(): void {
    this.selectedCdha = this.dataShareService.getSelectedRow();
    console.log(this.selectedCdha)
    this.cdhaForm.patchValue({
      caseStudyId: this.selectedCdha.data.caseStudyId ,
      medicalCdhaId: this.selectedCdha.data.medicaCdhaId ,
      reportId: this.selectedCdha.data.reportId ,
      conclusion: this.selectedCdha.data.conclusion ,
      description: this.selectedCdha.data.description ,
      imageName: this.selectedCdha.data.imageName ,
      imageLink: this.selectedCdha.data.imageLink 
    });
    console.log(this.cdhaForm)
    if (this.selectedCdha) {
      this.setPatientInformation(this.selectedCdha.data.patient);
    }
    this.initializeWebcam();
    // WebcamUtil.getAvailableVideoInputs().then((mediaDevices: MediaDeviceInfo[]) => {
    //   this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    //   this.cdr.detectChanges(); // Manually trigger change detection
    // });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCdha'] && changes['selectedCdha'].currentValue) {
      this.updateFormWithSelectedCdha(changes['selectedCdha'].currentValue);
    }
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
    if (this.showWebcam) {
        this.initializeWebcam();
    }else {
      this.stopWebcamStream();
  }
}

private initializeWebcam(): void {
    WebcamUtil.getAvailableVideoInputs().then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        this.cdr.detectChanges(); // Manually trigger change detection
    });
}

private stopWebcamStream(): void {
    const videoElement = document.querySelector('video');
    if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoElement.srcObject = null;
    }
}

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.capturedImages.push(webcamImage); 
  }
  addImageToUpload(image: WebcamImage): void {
    // this.capturedImages.push(image);
    console.log(this.files)
    const file = this.dataURLtoFile(image.imageAsDataUrl, `webcam_${new Date().getTime()}.png`);
    
    if (file) {
      this.files.push(file);
    }
  }
  private createObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }
  private dataURLtoFile(dataUrl: string, filename: string): File {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  public deleteImage(index: number): void {
    this.capturedImages.splice(index, 1); 
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  onRemoveTemplatingFile(event:any, file:any, removeFileCallback:any, index:any) {
    this.files.splice(index, 1);
    this.totalSizePercent = this.totalSize / 10;
    removeFileCallback(event, index); // Call the callback function to perform any additional actions
  }
  onClearTemplatingUpload(clear:any) {
    clear();
    this.totalSize = 0;
    this.totalSizePercent = 0;
}

onTemplatedUpload() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
}

onSelectedFiles(event:any) {
    this.files = event.currentFiles;
    this.totalSizePercent = this.totalSize / 10;
}

uploadEvent(callback:any) {
    callback();
}
choose(event:any, callback:any) {
  callback();
} 

private setPatientInformation(data: any) {
  this.patientInformation.patchValue({
    name: data.patientName,
    age: data.patientAge,
    dob: data.dob,
    diagnosis: data.diagnosis,
    address: data.address
  });
  console.log(this.patientInformation)
}
private updateFormWithSelectedCdha(selectedCdha: any) {
  this.cdhaForm.patchValue({
    caseStudyId: selectedCdha.caseStudyId || '',
    medicalCdhaId: selectedCdha.medicaCdhaId || '',
    reportId: selectedCdha.reportId || '',
    conclusion: selectedCdha.conclusion || '',
    description: selectedCdha.description || '',
    imageName: selectedCdha.imageName || '',
    imageLink: selectedCdha.imageLink || ''
  });

  if (selectedCdha.patient) {
    this.patientInformation.patchValue({
      name: selectedCdha.patient.patientName || '',
      dob: selectedCdha.patient.dob || '',
      gender: selectedCdha.patient.sex === 1 ? 'Nam' : 'Nữ',
      diagnosis: selectedCdha.patient.diagnosis || '',
      address: selectedCdha.patient.address || ''
    });
  } else {
    this.patientInformation.reset(); 
  }
}
onSave(): void {
  console.log(this.cdhaForm)
  if (this.cdhaForm.valid) {
    
    const formData = new FormData();
    formData.append('caseStudyId', this.cdhaForm.get('caseStudyId')!.value);
    formData.append('medicalCdhaId', this.cdhaForm.get('medicalCdhaId')!.value);
    formData.append('reportId', this.cdhaForm.get('reportId')!.value);
    formData.append('conclusion', this.cdhaForm.get('conclusion')!.value);
    formData.append('description', this.cdhaForm.get('description')!.value);

    if (this.files.length > 0) {
      const file = this.files[0];
      formData.append('file', file);  
      // formData.append('imageName', file.name);
      // formData.append('imageLink', this.createObjectURL(file));
    } else {
      console.error('Không có tệp nào được chọn!');
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hãy cập nhật hình ảnh' });
      return;
    }
    console.log(formData)
    this.cdhaCaseStudyService.update(this.selectedCdha.data.id,formData).subscribe({
      next: (res) => {
        console.log(res)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Thực hiện thành công' });
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Thêm mới thất bại' });
      },
    }).add(() => {
      this.loading = false;
    });
  
}}}

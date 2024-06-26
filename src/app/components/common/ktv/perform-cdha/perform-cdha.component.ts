import { MessageService ,PrimeNGConfig} from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-perform-cdha',
  templateUrl: './perform-cdha.component.html',
  styleUrls: ['./perform-cdha.component.css']
})
export class PerformCDHAComponent implements OnInit {
  patientInformation:FormGroup
  procedure:FormGroup
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string | any;
  public videoWidth = 640;
  public videoHeight = 480;
  public errors: WebcamInitError[] = [];
  options: any = []
  selectedPatient:any
  public webcamImage: WebcamImage | undefined;
  public capturedImages: WebcamImage[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();


  files = [];
  totalSize : number = 0;
  totalSizePercent : number = 0;
  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private messageService:MessageService,
    private config: PrimeNGConfig
  ) {
    this.patientInformation=this.fb.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          gender: ['', Validators.required],
          diagnosis: ['', Validators.required],
          address: ['', Validators.required]
        }),
    this.procedure= this.fb.group({
          description: new FormControl('', Validators.required),
          notes: new FormControl('', Validators.required)
        }),
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
    WebcamUtil.getAvailableVideoInputs().then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
   
    this.showWebcam = !this.showWebcam;
    console.log(this.showWebcam )
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
    this.capturedImages.push(webcamImage); // add captured image to the array
  }

  public deleteImage(index: number): void {
    this.capturedImages.splice(index, 1); // remove image from the array
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

  //imamge 

  onRemoveTemplatingFile(event:any, file:any, removeFileCallback:any, index:any) {
    removeFileCallback(event, index);
    this.totalSizePercent = this.totalSize / 10;
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
}

import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { FormGroup,FormControl,FormBuilder ,Validators} from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-perform-cdha',
  templateUrl: './perform-cdha.component.html',
  styleUrls: ['./perform-cdha.component.css']
})
export class PerformCDHAComponent implements OnInit {
  reportForm: FormGroup;
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string | any;
  public videoWidth = 640;
  public videoHeight = 480;
  public errors: WebcamInitError[] = [];
  options:any =[]

  
  // latest snapshot
  public webcamImage: WebcamImage | undefined;
  // array to store captured images
  public capturedImages: WebcamImage[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  constructor(private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { 
    this.reportForm = this.fb.group({
      patientInformation: this.fb.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        gender: ['', Validators.required],
        diagnosis: ['', Validators.required],
        address: ['', Validators.required]
      }),
      procedure: this.fb.group({
        description: ['', Validators.required],
        notes: ['', Validators.required]
      }),
      conclusion: this.fb.group({
        summary: ['', Validators.required],
        recommendations: ['', Validators.required]
      }),
      doctorInformation: this.fb.group({
        name: ['', Validators.required],
        signature: ['', Validators.required],
        date: ['', Validators.required]
      })
    })

    this.options=[
      {label: "Nam", value: 'male'},
      {label: 'Nữ', value: 'female'}
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
}

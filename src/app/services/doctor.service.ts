import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService extends BaseService {
  override url = '/api/Doctor';
  getDoctors(): Observable<any[]> {
    return this.get(`${this.url}`);
  }
  getDoctorById(doctorId: string): Observable<any> {
    return this.get(`${this.url}/${doctorId}`);
  }
  override deleteById(id: any): Observable<any> {
      return this.delete(`${this.url}`,id);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ListCdhaService extends BaseService {
  override url = '/api/MedicalCdhas';
  getCDHA(): Observable<any[]> {
    return this.get(`${this.url}`);
  }
  // getPatientById(patientId: string): Observable<any> {
  //   return this.get(`${this.url}/${patientId}`);
  // }
  // override deleteById(id: any): Observable<any> {
  //     return this.delete(`${this.url}`,id);
  // }
}

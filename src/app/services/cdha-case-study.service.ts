import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class CDHACaseStudyService extends BaseService {
  override url = '/api/MedicalCdhaCaseStudy';
//   getUsers(): Observable<any[]> {
//     return this.get(`${this.url}`);
//   }
//   getUserById(UserId: string): Observable<any> {
//     return this.get(`${this.url}/${UserId}`);
//   }
//   addUser(payload: any): Observable<any> {
//     return this.post(`${this.url}`, payload);
// }
//   override deleteById(id: any): Observable<any> {
//       return this.delete(`${this.url}`,id);
//   }
}

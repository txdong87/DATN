import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class CaseStudyService extends BaseService {
  override url = '/api/CaseStudy';
  getCaseStudy(): Observable<any[]> {
    return this.get(`${this.url}`);
  }
  getCaseStudyById(caseStudyId: string): Observable<any> {
    return this.get(`${this.url}/${caseStudyId}`);
  }
  override deleteById(id: any): Observable<any> {
      return this.delete(`${this.url}`,id);
  }
}

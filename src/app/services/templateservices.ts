import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private selectedTemplateIdSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  selectedTemplateId$: Observable<string> =
    this.selectedTemplateIdSubject.asObservable();

  public eventEmitter = new EventEmitter<any>();

  setSelectedTemplateId(templateId: string) {
    this.selectedTemplateIdSubject.next(templateId);
  }

  backButtonFired() {
    this.eventEmitter.next('back');
  }
}

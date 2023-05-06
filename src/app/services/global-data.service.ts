import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  private _visibleComponents = new BehaviorSubject<boolean>(true);

  constructor() { }

  getVisibleComponents(): Observable<boolean> {
    return this._visibleComponents.asObservable();
  }

  setVisibleComponents(value: boolean) {
    this._visibleComponents.next(value);
  }
}

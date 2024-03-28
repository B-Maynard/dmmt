import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateUtilityService {

  private appState: any;
  constructor() { }

  public setAppState(data: {}) {
    this.appState = {...this.appState, ...data};
  }

  public getAppState() {
    return this.appState;
  }

}

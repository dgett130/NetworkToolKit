import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  getHome(): Observable<any> {
    return of({
      "widget": ["saving", "in-out"]
    });
  }
}

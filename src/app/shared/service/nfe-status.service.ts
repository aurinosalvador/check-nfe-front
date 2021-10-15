import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NFEServiceStatus } from '../models/NFEServiceStatus.model.';


@Injectable({
  providedIn: 'root'
})
export class NFEStatusService {

  apiUrl = 'http://localhost:8080/api/v1/nfe/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<NFEServiceStatus[]>{
      return this.httpClient.get<NFEServiceStatus[]>(this.apiUrl)
  }
}

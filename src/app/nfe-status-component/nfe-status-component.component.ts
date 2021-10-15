import { Component, OnInit } from '@angular/core';
// import { NFEServiceStatus } from '../shared/models/NFEServiceStatus.model.';
import {NFEStatusService} from '../shared/service/nfe-status.service'

@Component({
  selector: 'app-nfe-status-component',
  templateUrl: './nfe-status-component.component.html',
  styleUrls: ['./nfe-status-component.component.sass'],
})
export class NfeStatusComponentComponent implements OnInit {

  nfeStatus: object[];

  constructor(
    public nfeStatusService: NFEStatusService
  ) { }

  ngOnInit(): void {
    this.getAllNfeStatus();
    
  }

  getAllNfeStatus(){

    this.nfeStatusService.getAll().subscribe(
      data => {
        this.nfeStatus = data;
      });
  }

}

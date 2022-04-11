import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { dashHeadItems } from './dashboard.constants';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  headerTabs: any = _.cloneDeep(dashHeadItems);
  constructor() { }

  ngOnInit(): void {
  }

}

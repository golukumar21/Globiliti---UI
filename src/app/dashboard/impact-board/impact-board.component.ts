import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { campaingsData, learningTools, toolsPilots } from './impact-board-constant';

@Component({
  selector: 'app-impact-board',
  templateUrl: './impact-board.component.html',
  styleUrls: ['./impact-board.component.scss']
})
export class ImpactBoardComponent implements OnInit {
  campaingsData: any = _.cloneDeep(campaingsData);
  learningToolsData: any = _.cloneDeep(learningTools);
  toolsPilotData: any = _.cloneDeep(toolsPilots);
  constructor() { }

  ngOnInit(): void {
  }

}

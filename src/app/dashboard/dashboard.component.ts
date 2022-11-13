import { Component, OnInit } from '@angular/core';
import {GeneralService} from "../services/general.service";

export const Constants = {
  'SAVING_WIDGET_NAME': 'saving_widget',
  'INOUT_WIDGET_NAME': 'inout_widget'
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  readonly CONSTANTS = Constants;
  widgetArr = [];

  constructor(private genService: GeneralService) { }

  ngOnInit(): void {
    this.genService.getHome().subscribe(home => {
      this.widgetArr = home.widget;
      console.log(home);
    })
  }

}

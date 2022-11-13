import {Component, Input, OnInit} from '@angular/core';
import {Constants} from "../../dashboard/dashboard.component";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  readonly CONSTANTS = Constants;

  @Input() widgetName: string = "undefined";

  constructor() { }

  ngOnInit(): void {
  }

}

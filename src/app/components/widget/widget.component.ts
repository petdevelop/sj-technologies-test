import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WidgetType } from 'src/app/types/widge.type';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  @Input() widget: WidgetType = <WidgetType>{};
  @Output() onDelete = new EventEmitter<string>();

  public widgetArray: Array<Array<string>> = [];

  ngOnInit() {
    this.widgetArray = Object.entries(this.widget);
  }

  public onDeleteHandler(id: string): void {
    this.onDelete.emit(id);
  }
}

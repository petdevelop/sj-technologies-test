import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public totalPrice: Number = 0;
  public widgets: Array<any> = [];

  public constructor(private httpService: HttpService) {

  }

  public ngOnInit(): void {
    this.getWidgets();
  }

  public getWidgets(): void {
    this.httpService.getWidgets()
    .pipe(
      tap(widget => {
        this.totalPrice = widget.map(m => m.price).reduce((acc, curr) => acc + curr);
      })
    )
    .subscribe(widgets => this.widgets = [...widgets]);
  }

  public onDelete(widgetId: string): void {
    this.httpService.deleteWidget(widgetId).
      subscribe(_ => this.getWidgets());
  
  }

}

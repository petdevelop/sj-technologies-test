import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { WidgetType } from "../types/widge.type";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private url = 'https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets';

    public constructor(private httpClient: HttpClient) {}

    public getWidgets(): Observable<Array<WidgetType>> {
        return this.httpClient.get<Array<any>>(this.url).pipe(
            map(obj => Object.entries(obj)),
            map(arr => arr.map(val => this.toWidgetType(val))
        ));
    }

    public deleteWidget(id: string): Observable<any> {
        return this.httpClient.delete<any>(`${this.url}/${id}`);
    }

    private toWidgetType(data: any): WidgetType {
        const {color, description, id, name, price, sale } = data[1];
        return <WidgetType>{ color, description, id, name, price, sale };
    }

}
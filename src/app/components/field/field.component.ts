import { Component, Input } from '@angular/core';
import { FieldType } from 'src/app/types/field.type';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() field = <FieldType>{};
}

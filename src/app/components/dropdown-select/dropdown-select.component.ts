import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  imports: [],
  templateUrl: './dropdown-select.component.html',
  styleUrl: './dropdown-select.component.scss'
})
export class DropdownSelectComponent {

  @Input() options?: string[] = [];

  @Output() selectedOption = new EventEmitter<string>();

}

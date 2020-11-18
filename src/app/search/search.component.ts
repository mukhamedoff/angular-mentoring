import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchText: string;
  @Output() searchSubmit: EventEmitter<string> = new EventEmitter<string>();

  onSearch(): void {
    if (!this.searchText) {
      return;
    }
    this.searchSubmit.emit(this.searchText || '');
  }

}

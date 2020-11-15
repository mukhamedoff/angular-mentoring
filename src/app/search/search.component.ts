import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchText: string;
  @Output() filterCourses: EventEmitter<string> = new EventEmitter<string>();

  onSearch(): void {
    this.filterCourses.emit(this.searchText || '');
    !this.searchText && console.log(`The search text is empty`);
  }

}

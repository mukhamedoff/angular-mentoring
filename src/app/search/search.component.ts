import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchText: string;

  onSearch(): void {
    console.log(`The search text is ${this.searchText ? this.searchText : 'empty'}`);
  }

}

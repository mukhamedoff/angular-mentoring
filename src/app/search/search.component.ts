import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchText: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(): void {
    console.log(`The search text is ${this.searchText ? this.searchText : 'empty'}`);
  }

}

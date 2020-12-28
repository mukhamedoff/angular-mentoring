import { Component, Output, EventEmitter, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import {fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

  showButton = false;

  public searchText: string;
  @Output() searchSubmit: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput') input: ElementRef;

  onSearch(): void {
    if (!this.searchText) {
      return;
    }
    this.searchSubmit.emit(this.searchText || '');
  }

  ngAfterViewInit() {
    var _this = this;
    fromEvent(this.input.nativeElement,'keyup')
        .pipe(
            filter(Boolean),
            debounceTime(1500),
            distinctUntilChanged(),
            tap(() => {
              const value = this.input.nativeElement.value;
              if (value && value.length > 2) {
                _this.searchSubmit.emit(value || '');
              }
            })
        )
        .subscribe();
  }

}

import { Author } from './../../../shared/authors/authors.interface';
import { AuthorsService } from './../../../shared/authors/authors.service';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, HostBinding, HostListener, Input, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { fromEvent, of } from 'rxjs';
import { catchError, distinctUntilChanged, take, tap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MultiInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiInputComponent implements ControlValueAccessor, AfterViewInit, Validator  {
  private _items;
  suggestions = [];
  showSuggestions = false;
  placeholder = 'Type to find';
  @ViewChild('searchInput') input: ElementRef;

  constructor(private authorsService: AuthorsService, private cdr: ChangeDetectorRef) {}

  get items() {
    return this._items;
  }

  @Input()
  set items(val) {
    this._items = val;
    this.onChange(this._items);
    this.onTouched(this._items);
    this.onValidationChange();
  }

  onChange(_: any) {}
  onTouched(_: any) {}
  onValidationChange: any = () => {};
  
  add(item) {
    this.items.push(item);
    this.items = [].concat(this.items);
    this.showSuggestions = false;
  }
  
  remove(item) {
    this.items = this.items.filter(it => it.id !== item.id);
  }

  writeValue(value: any) {
    this.items = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
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
              _this.onSearch(value);
            })
        )
        .subscribe();
  }

  onSearch(searchedText: string): void {
    const _this = this;
    this.authorsService
    .getAll({ textFragment: searchedText })
    .pipe(
      take(1),
      tap((data: Array<Author>) => {
        _this.suggestions = data;
        _this.showSuggestions = true;
        _this.cdr.detectChanges();
      }),
      catchError(err => {
        console.log(`Error was caused on searching: ${err}`);
        return of([]);
      })
    )
    .subscribe()
  }

  validate(control: AbstractControl): ValidationErrors {
    const isInvalid = this._items && this._items.length === 0;

    return isInvalid ? { invalidMultiInput: isInvalid } : null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn;
  }
}

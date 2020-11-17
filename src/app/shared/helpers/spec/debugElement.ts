
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function getDebugElement(fixture: ComponentFixture<any>, cssSelector: string): DebugElement {
    return fixture.debugElement.query(By.css(cssSelector));
}

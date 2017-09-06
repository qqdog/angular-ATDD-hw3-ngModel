import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
/** 要測試 button 跟 checkbox 的話，一定要 import FormsModule */
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`ATDDCheckBox`, () => {
    describe(`Intergration Test`, () => {
      it(`should use 'buttonText' field`, () => {
        component.buttonText = 'fake';
        fixture.detectChanges();

        htmlElement = debugElement.query(By.css('button')).nativeElement;
        expect(htmlElement.textContent).toBe('fake');
      });

      /** todo, component.agree can not be set to false */
      // it(`should use 'agree' field on 'disabled' attribute in HTML`, () => {
      //   component.agree = false;
      //   fixture.detectChanges();

      //   htmlElement = debugElement.query(By.css('button')).nativeElement;
      //   expect(htmlElement.getAttribute('disabled')).toBe(true);
      // });

      it(`should have 'agree' field on 'ngModel' directive`, () => {
        debugElement.query(By.css('#atdd-checkbox')).triggerEventHandler('change', {target: {checked: true}});
        expect(component.agree).toBe(true);
      });

      // it(`should use 'checkBoxLebel' field connecting with checkbox in HTML`, () => {

      // });
    });
  });

});

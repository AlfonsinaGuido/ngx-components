import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

const Testing1 = (): void => {
  console.log('Funcion 1');
};

const Testing2 = (): void => {
  console.log('Funcion 2');
};

const title = 'Dialogo de testing';

const simpleContent = 'Testing de prueba para dialogo';

const scrollableMockData = `
  <h3>Develop across all platforms</h3>
  <p>Learn one way to build applications with Angular and reuse your code and abilities to build
    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>

  <h3>Speed &amp; Performance</h3>
  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge
    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>
  `;

const mockDataSingleContent = {
  title: title,
  simpleContent: simpleContent,
  buttonsItems: [
    { label: 'Item 1', theme: 'warning' },
    { label: 'Item 2', theme: 'primary' },
  ],
};

const mockDataScrollableContent = {
  title: title,
  scrollableContent: scrollableMockData,
  buttonsItems: [{ label: 'Item 1', theme: 'warning' }],
};

describe('DialogComponent have simple content with action buttons', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockDataSingleContent },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign default data and information received from MatDialogData', () => {
    expect(component.title).toBe(title);
    expect(component.scrollableContent).toBe('');
    expect(component.simpleContent).toBe(simpleContent);
    expect(component.buttonsItems.length).toEqual(2);
  });

  it('should have 2 buttons in the dialog ', async () => {
    fixture.detectChanges();

    const menuItems = fixture.debugElement.queryAll(By.css('evo-button'));
    expect(menuItems.length).toBe(2);
  });
});

describe('DialogComponent have scrollable content with action buttons', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockDataScrollableContent },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign default data and information received from MatDialogData', () => {
    expect(component.title).toBe(title);
    expect(component.scrollableContent).toBe(scrollableMockData);
    expect(component.simpleContent).toBe('');
    expect(component.buttonsItems.length).toEqual(1);
  });

  it('should have 1 buttons in the dialog ', async () => {
    fixture.detectChanges();

    const menuItems = fixture.debugElement.queryAll(By.css('evo-button'));
    expect(menuItems.length).toBe(1);
  });
});

describe('DialogComponent have not data, and should use default data', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign default data and information received from MatDialogData', () => {
    expect(component.title).toBe('');
    expect(component.scrollableContent).toBe('');
    expect(component.simpleContent).toBe('');
    expect(component.buttonsItems.length).toEqual(0);
  });

  it('should have 1 buttons in the dialog ', async () => {
    fixture.detectChanges();

    const menuItems = fixture.debugElement.queryAll(By.css('evo-button'));
    expect(menuItems.length).toBe(0);
  });
});

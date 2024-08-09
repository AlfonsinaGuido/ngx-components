import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightComponent } from './highlight.component';
import { By } from '@angular/platform-browser';

describe('HighlightComponent', () => {
  let component: HighlightComponent;
  let fixture: ComponentFixture<HighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default properties set correctly', () => {
    expect(component.title).toBe('');
    expect(component.subtitle).toBe('');
    expect(component.cardtext).toBe('');
  });

  it('should have have all the items if the data ', () => {
    component.title = 'Titulo testing';
    component.subtitle = 'Subtitulo testing';
    component.cardtext = 'cardtext';

    fixture.detectChanges();

    const title = fixture.debugElement.queryAll(By.css('.aside-title'));
    const subtitle = fixture.debugElement.queryAll(By.css('.aside-subtitle'));
    const cardtext = fixture.debugElement.queryAll(By.css('.aside-cardtext'));

    expect(title.length).toBe(1);
    expect(subtitle.length).toBe(1);
    expect(cardtext.length).toBe(1);
  });

  it('should have only the title', () => {
    component.title = 'Titulo testing';

    fixture.detectChanges();

    const title = fixture.debugElement.queryAll(By.css('.aside-title'));
    const subtitle = fixture.debugElement.queryAll(By.css('.aside-subtitle'));
    const cardtext = fixture.debugElement.queryAll(By.css('.aside-cardtext'));

    expect(title.length).toBe(1);
    expect(subtitle.length).toBe(0);
    expect(cardtext.length).toBe(0);
  })
});

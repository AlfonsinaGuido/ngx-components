import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagComponent } from './tag.component';
import { prioridadHigh } from 'stories/data/kanban/prioridades.data';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    component.prioridad = prioridadHigh;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "tag__size-sm" css class by default', () => {
    const tagEl: HTMLElement = fixture.nativeElement;
    const tag = tagEl.querySelector('p');
    const tagClass = tag?.className;
    expect(tagClass).toContain('tag__size-sm');
  });

  it('should have "tag__size-md" class when set on medium size', () => {
    component.size = 'md';
    fixture.detectChanges();
    const tagEl: HTMLElement = fixture.nativeElement;
    const tag = tagEl.querySelector('p');
    const tagClass = tag?.className;
    expect(tagClass).toContain('tag__size-md');
  });

  it('should render text label', () => {
    const prioridadMock = { ...prioridadHigh, nombre: 'TagTest' };
    component.prioridad = prioridadMock;
    fixture.detectChanges();
    const tagEl: HTMLElement = fixture.nativeElement;
    expect(tagEl.textContent).toContain('TagTest');
  });
});

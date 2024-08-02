import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagComponent } from './tag.component';
import { Prioridad } from '../enums/prioridad.enum';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "tag_size-sm" css class by default', () => {
    const tagEl: HTMLElement = fixture.nativeElement;
    const tag = tagEl.querySelector('p');
    const tagClass = tag?.className;
    expect(tagClass).toContain('tag_size-sm');
  });

  it('should have "tag_size-md" class when set on medium size', () => {
    component.size = 'md';
    fixture.detectChanges();
    const tagEl: HTMLElement = fixture.nativeElement;
    const tag = tagEl.querySelector('p');
    const tagClass = tag?.className;
    expect(tagClass).toContain('tag_size-md');
  });

  it('should have "Alta" css class when priority set to high', () => {
    component.prioridad = Prioridad.High;
    fixture.detectChanges();
    const tagEl: HTMLElement = fixture.nativeElement;
    const tag = tagEl.querySelector('p');
    const tagClass = tag?.className;
    expect(tagClass).toContain('Alta');
  });

  it('should render text label', () => {
    component.label = 'TagTest';
    fixture.detectChanges();
    const tagEl: HTMLElement = fixture.nativeElement;
    expect(tagEl.textContent).toContain('TagTest');
  });
});

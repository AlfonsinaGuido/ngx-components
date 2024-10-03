import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct placeholder', () => {
    const inputElement = fixture.debugElement.query(
      By.css('input'),
    ).nativeElement;
    expect(inputElement.placeholder).toBe('Buscar...');
  });

  it('should emit the search query when typing and waiting for debounce', (done: DoneFn) => {
    spyOn(component.searchQuery, 'emit');
    const inputElement = fixture.debugElement.query(
      By.css('input'),
    ).nativeElement;

    inputElement.value = 'Test search';
    inputElement.dispatchEvent(new Event('input'));

    setTimeout(() => {
      expect(component.searchQuery.emit).toHaveBeenCalledWith('Test search');
      done();
    }, 400);
  });

  it('should clear the input and emit empty string when clearInput is called', () => {
    component.inputValue = 'Some value';
    spyOn(component.searchQuery, 'emit');

    component.clearInput();

    expect(component.inputValue).toBe('');
    expect(component.searchQuery.emit).toHaveBeenCalledWith('');
  });
});

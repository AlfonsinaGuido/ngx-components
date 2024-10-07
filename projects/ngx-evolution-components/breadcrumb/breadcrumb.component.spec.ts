import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbComponent } from './breadcrumb.component';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            root: {
              routeConfig: {
                data: { breadcrumb: 'home' },
                path: '',
              },
              firstChild: {
                routeConfig: {
                  data: { breadcrumb: 'child' },
                  path: 'child',
                },
                firstChild: {
                  routeConfig: {
                    data: { breadcrumb: 'grandchild' },
                    path: 'grandchild',
                  },
                  firstChild: null,
                },
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build breadcrumb correctly', () => {
    const breadcrumbs = component.buildBreadcrumb(
      component['activatedRoute'].root,
    );
    expect(breadcrumbs.length).toBe(3);
    expect(breadcrumbs[0].label).toBe('home');
    expect(breadcrumbs[1].label).toBe('child');
    expect(breadcrumbs[2].label).toBe('grandchild');
  });

  it('should apply Tailwind capitalize class to breadcrumb label', () => {
    const labelElement = fixture.debugElement.query(By.css('span'));
    expect(labelElement.classes['capitalize']).toBeTrue();
  });

  it('should unsubscribe from router events on destroy, ngOnDestroy()', () => {
    const unsubscribeSpy = spyOn(
      component['routerEventsSubscription'],
      'unsubscribe',
    ).and.callThrough();
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});

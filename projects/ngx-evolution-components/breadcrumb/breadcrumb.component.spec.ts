import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbComponent } from './breadcrumb.component';
import { ActivatedRoute } from '@angular/router';

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
    expect(breadcrumbs[0].label).toBe('Home');
    expect(breadcrumbs[1].label).toBe('Child');
    expect(breadcrumbs[2].label).toBe('Grandchild');
  });

  it('should capitalize the first letter of the label, capitalizeFirstLetter(label: string): string', () => {
    const label = 'test';
    const capitalized = component.capitalizeFirstLetter(label);
    expect(capitalized).toBe('Test');
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

import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IBreadcrumb, IHomeElement, SvgComponent } from '../public-api';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { distinctUntilChanged, filter, Subscription } from 'rxjs';

@Component({
  selector: 'evo-breadcrumb',
  standalone: true,
  imports: [RouterModule, SvgComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  @Input() twClass?: string;
  @Input() homeElement?: IHomeElement;
  public breadcrumbs: IBreadcrumb[] = [];
  private routerEventsSubscription!: Subscription;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root);
  }

  ngOnInit(): void {
    this.routerEventsSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged(),
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root);
      });
  }

  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }

  /**
   * Acorde a la ruta activada, buildear el breadcrumb recursivamente
   * @param route la ruta activada
   * @param url el URL de navegación completo
   * @param breadcrumbs Objeto tipo IBreadcrumb que contiene label y URL
   */
  buildBreadcrumb(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: IBreadcrumb[] = [],
  ): IBreadcrumb[] {
    // ... implementation of buildBreadCrumb
    const label = route.routeConfig?.data
      ? this.capitalizeFirstLetter(route.routeConfig.data['breadcrumb'])
      : '';
    const path = route.routeConfig?.data ? route.routeConfig.path : '';

    const nextURL = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadcrumb = {
      label: label,
      url: nextURL,
    };

    // Validamos que label no esté en blanco
    const newBreadcrumb = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    if (route.firstChild) {
      // Si el URL no coincide con el que estamos actualmente, significa que tenemos que seguir iterando
      // El resto de hijos
      return this.buildBreadcrumb(route.firstChild, nextURL, newBreadcrumb);
    }

    return newBreadcrumb;
  }

  capitalizeFirstLetter(label: string): string {
    return label.charAt(0).toUpperCase() + label.slice(1);
  }
}

(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [3733],
  {
    "./projects/ngx-evolution-components/dynamic-table/dynamic-table.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".smart-table-selector {\n  height: 60px;\n  font-size: 12px;\n}\n.smart-table-selector .mat-mdc-form-field-infix {\n  bottom: 8px;\n}\n.smart-table-selector .mat-mdc-form-field-focus-overlay {\n  height: 42px;\n}\n.smart-table-selector label,\n.smart-table-selector span {\n  font-size: 12px;\n}\n\ntable.w-full th.th-checkbox-header {\n  background-color: #f9fafb;\n}\n\n.dynamic-table {\n  --scrollbar-track-color: #f1f1f1;\n  --scrollbar-thumb-color: #c1c1c1;\n  --scrollbar-size: 5px;\n}\n.dynamic-table .custom-scroll::-webkit-scrollbar {\n  width: var(--scrollbar-size);\n}\n.dynamic-table .custom-scroll::-webkit-scrollbar-track {\n  background: var(--scrollbar-track-color);\n  border-radius: 5px;\n}\n.dynamic-table .custom-scroll::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-thumb-color);\n  border-radius: 5px;\n}\n@supports not selector(::-webkit-scrollbar) {\n  .dynamic-table .custom-scroll {\n    scrollbar-width: thin;\n    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);\n  }\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/pagination/pagination.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".evo-pagination {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 1rem;\n}\n.evo-pagination span {\n  font-size: 0.875rem;\n}\n.evo-pagination evo-button .evo-button.pagination__evo-button.without-border.theme-secondary {\n  background-color: transparent;\n  box-shadow: none;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/pagination/pagination.component.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        e: () => PaginationComponent,
      });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var pagination_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/pagination/pagination.component.scss?ngResource",
        ),
        pagination_componentngResource_default = __webpack_require__.n(
          pagination_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        class_utility_service = __webpack_require__(
          "./projects/ngx-evolution-components/shared/services/class-utility.service.ts",
        ),
        button_component = __webpack_require__(
          "./projects/ngx-evolution-components/button/button.component.ts",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        );
      let PaginationComponent = class PaginationComponent {
        constructor(classUtility) {
          (this.classUtility = classUtility),
            (this.config = {
              isManualPaginate: !1,
              currentPage: 1,
              totalPages: 1,
              pageSize: 10,
              totalItems: 0,
              titles: {
                showing: "Mostrando",
                results: "resultados",
                page: "Página",
                of: "de",
              },
              twClass: "",
              simplePageIndicator: !1,
              nextPage: !1,
            }),
            (this.pageSelected = new core.EventEmitter()),
            (this.nextPageClicked = new core.EventEmitter()),
            (this.previousPageClicked = new core.EventEmitter());
        }
        previousPage() {
          this.config.currentPage > 1 && this.previousPageClicked.emit();
        }
        nextPage() {
          this.config.simplePageIndicator
            ? this.config.nextPage && this.nextPageClicked.emit()
            : this.config.currentPage < this.config.totalPages &&
              this.nextPageClicked.emit();
        }
        getMinValue(value1, value2) {
          return Math.min(value1, value2);
        }
        getClasses() {
          return this.classUtility.getCombinedClasses(
            "evo-pagination",
            this.config.twClass,
          );
        }
        getPageIndicatorText() {
          return this.config.simplePageIndicator
            ? `${this.config.titles.page} ${this.config.currentPage}`
            : `${this.config.titles.page} ${this.config.currentPage} ${this.config.titles.of} ${this.config.totalPages}`;
        }
        getItemsRangeText() {
          if (this.config.hideItemsRange) return "";
          let startItem = this.config.currentPage * this.config.pageSize,
            endItem = this.config.totalItems;
          return (
            startItem > endItem && (startItem = endItem),
            `${this.config.titles.showing} ${startItem} - ${endItem} ${this.config.titles.results}`
          );
        }
        static #_ = (this.ctorParameters = () => [
          { type: class_utility_service.Y },
        ]);
        static #_2 = (this.propDecorators = {
          config: [{ type: core.Input }],
          pageSelected: [{ type: core.Output }],
          nextPageClicked: [{ type: core.Output }],
          previousPageClicked: [{ type: core.Output }],
        });
      };
      PaginationComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "pagination",
            standalone: !0,
            imports: [common.CommonModule, button_component.Q],
            template:
              '\x3c!-- Contenedor de paginación --\x3e\n<div [ngClass]="getClasses()">\n  \x3c!-- Botón para ir a la página anterior --\x3e\n  <evo-button\n    (click)="previousPage()"\n    [disabled]="config.currentPage <= 1"\n    [icon]="{ type: \'class\', icon: \'chevron_left\' }"\n    [twClass]="\'pagination__evo-button\'"\n    [withoutBorder]="true"\n    [theme]="\'secondary\'"\n  ></evo-button>\n\n  \x3c!-- Indicador de la página actual y el total de páginas --\x3e\n  <span>{{ getPageIndicatorText() }}</span>\n\n  \x3c!-- Botón para ir a la página siguiente --\x3e\n  <evo-button\n    (click)="nextPage()"\n    [disabled]="\n      config.simplePageIndicator\n        ? !config.nextPage\n        : config.currentPage >= config.totalPages\n    "\n    [icon]="{ type: \'class\', icon: \'chevron_right\' }"\n    [withoutBorder]="true"\n    [twClass]="\'pagination__evo-button\'"\n    [theme]="\'secondary\'"\n  ></evo-button>\n\n  \x3c!-- Información sobre el rango de ítems mostrados y el total de resultados --\x3e\n  <span>{{ getItemsRangeText() }}</span>\n</div>\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              pagination_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        PaginationComponent,
      );
    },
    "./projects/ngx-evolution-components/shared/services/class-utility.service.ts":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Y: () => ClassUtilityService,
        });
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/tslib/tslib.es6.mjs",
          ),
          _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            "./node_modules/@angular/core/fesm2022/core.mjs",
          );
        let ClassUtilityService = class ClassUtilityService {
          getCombinedClasses(baseClasses = "", twClass = "") {
            return `${baseClasses} ${twClass}`.trim();
          }
        };
        ClassUtilityService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.Cg)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
              providedIn: "root",
            }),
          ],
          ClassUtilityService,
        );
      },
    "./projects/ngx-evolution-components/shared/services/viewport.service.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { K: () => ViewportService });
      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./node_modules/tslib/tslib.es6.mjs",
        ),
        _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js",
        ),
        rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js",
        ),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js",
        ),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js",
        );
      let ViewportService = class ViewportService {
        constructor(platformId) {
          (this.platformId = platformId),
            (this.isMobileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.t(
              !1,
            )),
            (0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(
              this.platformId,
            ) &&
              (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(window, "resize")
                .pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.B)(200),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    this.checkViewport(),
                  ),
                )
                .subscribe(() => this.checkViewport());
        }
        checkViewport() {
          const isMobile = window.innerWidth <= 640;
          this.isMobileSubject.next(isMobile);
        }
        getIsMobile() {
          return this.isMobileSubject.asObservable();
        }
        static #_ = (this.ctorParameters = () => [
          {
            type: Object,
            decorators: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID],
              },
            ],
          },
        ]);
      };
      ViewportService = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.Cg)(
        [
          (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
            providedIn: "root",
          }),
        ],
        ViewportService,
      );
    },
    "./stories/dynamic-table.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CheckboxesAndSelector: () => CheckboxesAndSelector,
          Default: () => Default,
          Empty: () => Empty,
          ManualPagination: () => ManualPagination,
          MobileView: () => MobileView,
          SimplePagination: () => SimplePagination,
          TagNoColor: () => TagNoColor,
          WithAvatar: () => WithAvatar,
          WithColorTags: () => WithColorTags,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => dynamic_table_stories,
        });
      var dist = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        ),
        tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var dynamic_table_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/dynamic-table/dynamic-table.component.scss?ngResource",
        ),
        dynamic_table_componentngResource_default = __webpack_require__.n(
          dynamic_table_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        fesm2022_forms = __webpack_require__(
          "./node_modules/@angular/forms/fesm2022/forms.mjs",
        ),
        icon = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/icon.mjs",
        ),
        viewport_service = __webpack_require__(
          "./projects/ngx-evolution-components/shared/services/viewport.service.ts",
        ),
        pagination_component = __webpack_require__(
          "./projects/ngx-evolution-components/pagination/pagination.component.ts",
        ),
        button_component = __webpack_require__(
          "./projects/ngx-evolution-components/button/button.component.ts",
        ),
        select_component = __webpack_require__(
          "./projects/ngx-evolution-components/select/select.component.ts",
        ),
        avatar_component = __webpack_require__(
          "./projects/ngx-evolution-components/avatar/avatar.component.ts",
        );
      let DynamicTableComponent = class DynamicTableComponent {
        constructor(cdr, _viewportService) {
          (this.cdr = cdr),
            (this._viewportService = _viewportService),
            (this.columns = []),
            (this.data = []),
            (this.paginationConfig = {
              isManualPaginate: !1,
              currentPage: 1,
              totalPages: 1,
              pageSize: 5,
              totalItems: 0,
              titles: {
                showing: "Mostrando",
                results: "resultados",
                page: "Página",
                of: "de",
              },
            }),
            (this.config = {
              multiSelect: !1,
              sortableColumns: [],
              tagsColumns: [],
              colorRules: {},
              maxHeight: "auto",
              emptyStateText: "No hay datos para mostrar",
            }),
            (this.hiddenColumns = []),
            (this.twClass = ""),
            (this.selectionChange = new core.EventEmitter()),
            (this.columnSort = new core.EventEmitter()),
            (this.tagClick = new core.EventEmitter()),
            (this.paginationEvents = {
              onPageChange: (page) => this.goToPage(page),
              onPreviousPage: () => this.previousPage(),
              onNextPage: () => this.nextPage(),
            }),
            (this.selectorValueChange = new core.EventEmitter()),
            (this.paginatedItems = []),
            (this.sortState = {}),
            (this.selectControls = new WeakMap()),
            (this.isMobile = !1);
        }
        ngOnInit() {
          (this.viewportSubscription = this._viewportService
            .getIsMobile()
            .subscribe((isMobile) => {
              (this.isMobile = isMobile),
                this.adjustPagination(),
                this.cdr.markForCheck();
            })),
            this.initializeTable();
        }
        ngOnChanges(changes) {
          (changes.data || changes.columns || changes.paginationConfig) &&
            this.initializeTable();
        }
        ngOnDestroy() {
          this.viewportSubscription && this.viewportSubscription.unsubscribe();
        }
        initializeTable() {
          this.adjustPagination(), this.cdr.markForCheck();
        }
        adjustPagination() {
          if (this.paginationConfig.isManualPaginate)
            this.paginatedItems = [...this.data];
          else {
            (this.paginationConfig.totalItems = this.data.length),
              (this.paginationConfig.totalPages = Math.ceil(
                this.paginationConfig.totalItems /
                  this.paginationConfig.pageSize,
              )),
              this.paginationConfig.currentPage >
                this.paginationConfig.totalPages &&
                (this.paginationConfig.currentPage = 1);
            const startIndex =
                (this.paginationConfig.currentPage - 1) *
                this.paginationConfig.pageSize,
              endIndex = startIndex + this.paginationConfig.pageSize;
            this.paginatedItems = this.data.slice(startIndex, endIndex);
          }
        }
        goToPage(page) {
          page < 1 ||
            page > this.paginationConfig.totalPages ||
            ((this.paginationConfig.currentPage = page),
            this.adjustPagination());
        }
        previousPage() {
          this.paginationConfig.currentPage > 1 &&
            this.goToPage(this.paginationConfig.currentPage - 1);
        }
        nextPage() {
          this.paginationConfig.currentPage <
            this.paginationConfig.totalPages &&
            this.goToPage(this.paginationConfig.currentPage + 1);
        }
        areAllSelected() {
          return (
            this.paginatedItems.length > 0 &&
            this.paginatedItems.every((row) => row.selected)
          );
        }
        toggleSelectAll() {
          if (!this.config.multiSelect) return;
          const allSelected = this.areAllSelected();
          this.paginatedItems.forEach((row) => (row.selected = !allSelected)),
            this.emitSelection();
        }
        toggleRowSelect(row) {
          this.config.multiSelect ||
            this.data.forEach((item) => (item.selected = !1)),
            (row.selected = !row.selected),
            this.emitSelection();
        }
        emitSelection() {
          const selectedRows = this.data.filter((item) => item.selected);
          this.selectionChange.emit(selectedRows);
        }
        isColumnHidden(colIndex) {
          return this.hiddenColumns.includes(colIndex);
        }
        isTagColumn(colIndex) {
          return this.config.tagsColumns.includes(colIndex);
        }
        toggleSort(colIndex) {
          if (!this.config.sortableColumns.includes(colIndex)) return;
          const currentState = this.sortState[colIndex] || null;
          let newState = null;
          null === currentState
            ? (newState = "asc")
            : "asc" === currentState
              ? (newState = "desc")
              : "desc" === currentState && (newState = null),
            (this.sortState[colIndex] = newState);
          let orderBy = "";
          const activeSorts = [];
          for (const idx of Object.keys(this.sortState)) {
            const indexNum = parseInt(idx, 10),
              dir = this.sortState[indexNum];
            dir && activeSorts.push(`${this.columns[indexNum].field} ${dir}`);
          }
          (orderBy = activeSorts.join(",")), this.columnSort.emit(orderBy);
        }
        getSortIcon(colIndex) {
          if (!this.config.sortableColumns.includes(colIndex)) return "sort";
          switch (this.sortState[colIndex]) {
            case "asc":
              return "arrow_upward";
            case "desc":
              return "arrow_downward";
            default:
              return "sort";
          }
        }
        getColorStyle(row, colIndex) {
          const rules = this.config.colorRules[colIndex];
          if (!rules || 0 === rules.length) return {};
          const cellValue = row[this.columns[colIndex].field],
            matchedRule = rules.find((rule) => rule.matchValue === cellValue);
          return matchedRule
            ? {
                "background-color": matchedRule.bgColor,
                color: matchedRule.textColor,
              }
            : {};
        }
        getMatchedColorRule(row, colIndex) {
          if (!this.config || !this.config.colorRules) return null;
          if (!this.columns || this.columns.length <= colIndex) return null;
          if (!row) return null;
          const rules = this.config.colorRules[colIndex];
          if (!rules) return null;
          const cellValue = row[this.columns[colIndex].field];
          return rules.find((r) => r.matchValue === cellValue) || null;
        }
        shouldRenderColorTag(row, colIndex) {
          return !!this.getMatchedColorRule(row, colIndex);
        }
        getTagStyle(row, colIndex) {
          const rule = this.getMatchedColorRule(row, colIndex);
          return rule
            ? { "background-color": rule.bgColor, color: rule.textColor }
            : {};
        }
        onTagClick(row, colIndex) {
          this.tagClick.emit({ row, columnIndex: colIndex });
        }
        trackByRow(index, item) {
          return item?.id || index;
        }
        trackByColumn(index, column) {
          return column.field || index;
        }
        getOrCreateSelectControl(row, column) {
          let controlsForRow = this.selectControls.get(row);
          return (
            controlsForRow ||
              ((controlsForRow = {}),
              this.selectControls.set(row, controlsForRow)),
            controlsForRow[column.field] ||
              (controlsForRow[column.field] = new fesm2022_forms.MJ(
                row[column.field],
              )),
            controlsForRow[column.field]
          );
        }
        onSelectorValueChange(value, row, column) {
          (row[column.field] = value),
            this.selectorValueChange.emit({ row, column, value });
        }
        static #_ = (this.ctorParameters = () => [
          { type: core.ChangeDetectorRef },
          { type: viewport_service.K },
        ]);
        static #_2 = (this.propDecorators = {
          columns: [{ type: core.Input }],
          data: [{ type: core.Input }],
          paginationConfig: [{ type: core.Input }],
          config: [{ type: core.Input }],
          hiddenColumns: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
          selectionChange: [{ type: core.Output }],
          columnSort: [{ type: core.Output }],
          tagClick: [{ type: core.Output }],
          paginationEvents: [{ type: core.Output }],
          selectorValueChange: [{ type: core.Output }],
        });
      };
      DynamicTableComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-dynamic-table",
            standalone: !0,
            imports: [
              common.CommonModule,
              pagination_component.e,
              fesm2022_forms.YN,
              icon.m_,
              button_component.Q,
              select_component.w,
              avatar_component.f,
            ],
            template:
              '\x3c!-- Si no hay datos --\x3e\n@if (data.length === 0) {\n  <div class="text-center py-4">\n    {{ config.emptyStateText }}\n  </div>\n} @else {\n  \x3c!-- Vista de tabla (no móvil) --\x3e\n  @if (!isMobile) {\n    <div\n      class="w-full overflow-hidden bg-white rounded-lg border border-gray-300 dynamic-table"\n      [ngClass]="twClass"\n    >\n      <div\n        class="w-full overflow-y-auto custom-scroll"\n        [ngStyle]="{ \'max-height\': config.maxHeight }"\n      >\n        <table class="w-full border-collapse">\n          <thead>\n            <tr>\n              \x3c!-- Checkbox general si config.multiSelect --\x3e\n              @if (config.multiSelect) {\n                <th class="p-3 th-checkbox-header text-center">\n                  <input\n                    type="checkbox"\n                    class="scale-110 checkbox-input align-middle text-primary"\n                    [checked]="areAllSelected()"\n                    (click)="toggleSelectAll(); $event.stopPropagation()"\n                  />\n                </th>\n              }\n\n              \x3c!-- Encabezados de columnas --\x3e\n              @for (column of columns; track trackByColumn) {\n                \x3c!-- Ocultamos la columna si hiddenColumns la incluye --\x3e\n                <th\n                  [hidden]="hiddenColumns.includes(columns.indexOf(column))"\n                  [style.textAlign]="column.align || \'left\'"\n                  [style.width]="column.width"\n                  class="p-3 bg-gray-50 font-semibold text-sm text-gray-600"\n                >\n                  <div class="flex items-center">\n                    <span>{{ column.header }}</span>\n                    \x3c!-- Sort button, si la columna es sortable --\x3e\n                    @if (\n                      config.sortableColumns.includes(columns.indexOf(column))\n                    ) {\n                      <evo-button\n                        class="ml-2 border-none bg-transparent cursor-pointer text-gray-500 hover:text-gray-700"\n                        [icon]="{\n                          type: \'class\',\n                          icon: getSortIcon(columns.indexOf(column)),\n                        }"\n                        size="sm"\n                        [withoutBorder]="true"\n                        (click)="toggleSort(columns.indexOf(column))"\n                        [theme]="\'secondary\'"\n                      ></evo-button>\n                    }\n                  </div>\n                </th>\n              }\n            </tr>\n          </thead>\n\n          <tbody>\n            @for (row of paginatedItems; track trackByRow) {\n              <tr class="hover:bg-gray-50" (click)="$event.stopPropagation()">\n                \x3c!-- Checkbox por fila --\x3e\n\n                @if (config.multiSelect) {\n                  <td class="p-3 text-center">\n                    <input\n                      type="checkbox"\n                      class="scale-110 checkbox-input align-middle text-primary"\n                      [checked]="row.selected"\n                      (click)="toggleRowSelect(row); $event.stopPropagation()"\n                    />\n                  </td>\n                }\n\n                \x3c!-- Celdas --\x3e\n                @for (column of columns; track trackByColumn) {\n                  <td\n                    [hidden]="hiddenColumns.includes(columns.indexOf(column))"\n                    [style.textAlign]="column.align || \'left\'"\n                    class="p-3 border-b border-gray-200"\n                  >\n                    @if (\n                      column.format === "selector" && column.selectorOptions\n                    ) {\n                      <evo-select\n                        [control]="getOrCreateSelectControl(row, column)"\n                        [items]="column.selectorOptions"\n                        (valueChange)="\n                          onSelectorValueChange($event, row, column)\n                        "\n                        [isMultiple]="column.isMultiple"\n                        [twClass]="\'smart-table-selector\'"\n                      ></evo-select>\n                    } @else {\n                      @if (column.format === "avatar") {\n                        <evo-avatar\n                          [name]="row[column.field]"\n                          [imgUrl]="column.imgField ? row[column.imgField] : \'\'"\n                          size="sm"\n                        ></evo-avatar>\n                      } @else {\n                        @if (\n                          shouldRenderColorTag(row, columns.indexOf(column)) ||\n                          isTagColumn(columns.indexOf(column))\n                        ) {\n                          <div\n                            class="inline-flex items-center bg-gray-200 rounded-full px-2 py-1 text-sm"\n                            [ngStyle]="\n                              getTagStyle(row, columns.indexOf(column))\n                            "\n                          >\n                            {{ row[column.field] }}\n                            @if (isTagColumn(columns.indexOf(column))) {\n                              <button\n                                class="ml-1.5 bg-transparent border-none text-gray-500 hover:text-red-500 cursor-pointer"\n                                (click)="\n                                  onTagClick(row, columns.indexOf(column))\n                                "\n                              >\n                                ✕\n                              </button>\n                            }\n                          </div>\n                        } @else {\n                          {{ row[column.field] }}\n                        }\n                      }\n                    }\n                  </td>\n                }\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </div>\n  }\n\n  \x3c!-- Vista tipo Cards (móvil) --\x3e\n  @if (isMobile) {\n    <div class="w-full dynamic-table" [ngClass]="twClass">\n      <div\n        class="w-full overflow-y-auto custom-scroll"\n        [ngStyle]="{ \'max-height\': config.maxHeight }"\n      >\n        @for (row of paginatedItems; track trackByRow) {\n          <div\n            class="border border-gray-300 rounded-lg p-4 mb-4 bg-white relative"\n          >\n            @if (config.multiSelect) {\n              <div class="absolute top-2 right-2">\n                <input\n                  type="checkbox"\n                  class="scale-110 checkbox-input align-middle text-primary"\n                  [checked]="row.selected"\n                  (click)="toggleRowSelect(row); $event.stopPropagation()"\n                />\n              </div>\n            }\n\n            \x3c!-- Bloques por cada columna --\x3e\n            @for (column of columns; track trackByColumn) {\n              <div\n                class="mb-4"\n                [hidden]="hiddenColumns.includes(columns.indexOf(column))"\n              >\n                <p class="font-bold text-sm mb-1">{{ column.header }}</p>\n                <div class="text-sm text-gray-700">\n                  @if (column.format === "selector" && column.selectorOptions) {\n                    <evo-select\n                      [control]="getOrCreateSelectControl(row, column)"\n                      [items]="column.selectorOptions"\n                      (valueChange)="onSelectorValueChange($event, row, column)"\n                      [isMultiple]="column.isMultiple"\n                      [twClass]="\'smart-table-selector\'"\n                    ></evo-select>\n                  } @else {\n                    @if (column.format === "avatar") {\n                      <evo-avatar\n                        [name]="row[column.field]"\n                        [imgUrl]="column.imgField ? row[column.imgField] : \'\'"\n                        size="sm"\n                      ></evo-avatar>\n                    } @else {\n                      @if (\n                        shouldRenderColorTag(row, columns.indexOf(column)) ||\n                        isTagColumn(columns.indexOf(column))\n                      ) {\n                        <div\n                          class="inline-flex items-center bg-gray-200 rounded-full px-2 py-1 text-sm"\n                          [ngStyle]="getTagStyle(row, columns.indexOf(column))"\n                        >\n                          {{ row[column.field] }}\n                          @if (isTagColumn(columns.indexOf(column))) {\n                            <button\n                              class="ml-1.5 bg-transparent border-none text-gray-500 hover:text-red-500 cursor-pointer"\n                              (click)="onTagClick(row, columns.indexOf(column))"\n                            >\n                              ✕\n                            </button>\n                          }\n                        </div>\n                      } @else {\n                        {{ row[column.field] }}\n                      }\n                    }\n                  }\n                </div>\n              </div>\n            }\n          </div>\n        }\n      </div>\n    </div>\n  }\n\n  \x3c!-- Paginación --\x3e\n  <pagination\n    [config]="paginationConfig"\n    (nextPageClicked)="paginationEvents.onNextPage()"\n    (previousPageClicked)="paginationEvents.onPreviousPage()"\n    (pageSelected)="paginationEvents.onPageChange($event.page)"\n  ></pagination>\n}\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              dynamic_table_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        DynamicTableComponent,
      );
      var animations = __webpack_require__(
        "./node_modules/@angular/platform-browser/fesm2022/animations.mjs",
      );
      const exampleColumns = [
          { header: "ID", field: "id", width: "50px" },
          { header: "Nombre", field: "name" },
          { header: "Estado", field: "status" },
        ],
        exampleData = [
          {
            id: 1,
            name: "Juan Pérez",
            status: "Activo",
            avatarUrl: "https://i.pravatar.cc/150?img=3",
          },
          { id: 2, name: "María López", status: "Pendiente", avatarUrl: "" },
          {
            id: 3,
            name: "Mario Gómez",
            status: "Inactivo",
            avatarUrl: "https://i.pravatar.cc/150?img=5",
          },
          {
            id: 4,
            name: "Luisa Rodríguez",
            status: "Activo",
            avatarUrl: "https://i.pravatar.cc/150?img=8",
          },
          { id: 5, name: "Carlos Sánchez", status: "Pendiente", avatarUrl: "" },
        ],
        colorRules = {
          2: [
            { matchValue: "Activo", bgColor: "#D1FAE5", textColor: "#065F46" },
            {
              matchValue: "Pendiente",
              bgColor: "#FEF9C3",
              textColor: "#92400E",
            },
            {
              matchValue: "Inactivo",
              bgColor: "#FEE2E2",
              textColor: "#7F1D1D",
            },
          ],
        },
        basePagination = {
          isManualPaginate: !1,
          currentPage: 1,
          totalPages: 1,
          pageSize: 3,
          totalItems: 0,
          titles: {
            showing: "Mostrando",
            results: "resultados",
            page: "Página",
            of: "de",
          },
          page: 0,
        },
        dynamic_table_stories = {
          title: "Evolution Components/Dynamic Table",
          component: DynamicTableComponent,
          decorators: [
            (0, dist.moduleMetadata)({
              imports: [
                animations.BrowserAnimationsModule,
                button_component.Q,
                pagination_component.e,
              ],
            }),
          ],
          tags: ["autodocs"],
        },
        Default = {
          args: {
            columns: exampleColumns,
            data: exampleData,
            paginationConfig: { ...basePagination },
            config: {
              multiSelect: !1,
              sortableColumns: [0, 2, 3],
              tagsColumns: [],
              colorRules: {},
              maxHeight: "250px",
              emptyStateText: "No hay datos para mostrar",
            },
            hiddenColumns: [],
            isMobile: !1,
            twClass: "",
          },
        },
        WithColorTags = {
          args: {
            columns: exampleColumns,
            data: exampleData,
            paginationConfig: { ...basePagination },
            config: {
              multiSelect: !1,
              sortableColumns: [1, 2],
              tagsColumns: [],
              colorRules,
              maxHeight: "300px",
              emptyStateText: "No hay datos para mostrar",
            },
            hiddenColumns: [],
            isMobile: !1,
            twClass: "",
          },
        },
        SimplePagination = {
          args: {
            columns: exampleColumns,
            data: exampleData,
            paginationConfig: {
              ...basePagination,
              hideItemsRange: !0,
              simplePageIndicator: !0,
              nextPage: !0,
            },
            config: {
              multiSelect: !1,
              sortableColumns: [0, 2, 3],
              tagsColumns: [],
              colorRules: {},
              maxHeight: "250px",
              emptyStateText: "No hay datos para mostrar",
            },
            hiddenColumns: [],
            isMobile: !1,
            twClass: "",
          },
        },
        TagNoColor = {
          args: {
            columns: exampleColumns,
            data: exampleData,
            paginationConfig: { ...basePagination },
            config: {
              multiSelect: !1,
              sortableColumns: [1, 2],
              tagsColumns: [2],
              colorRules: {},
              maxHeight: "300px",
              emptyStateText: "No hay datos para mostrar",
            },
            hiddenColumns: [],
            isMobile: !1,
            twClass: "",
          },
        },
        MobileView = {
          args: {
            columns: exampleColumns,
            data: exampleData,
            paginationConfig: { ...basePagination },
            config: {
              multiSelect: !0,
              sortableColumns: [0, 1, 2],
              tagsColumns: [],
              colorRules,
              maxHeight: "400px",
              emptyStateText: "No hay datos para mostrar",
            },
            hiddenColumns: [],
            isMobile: !0,
            twClass: "p-4",
          },
        },
        ManualPagination = {
          args: {
            columns: exampleColumns,
            data: exampleData,
            paginationConfig: {
              ...basePagination,
              isManualPaginate: !0,
              totalPages: 3,
              currentPage: 1,
              pageSize: 2,
            },
            config: {
              multiSelect: !1,
              sortableColumns: [0, 2],
              tagsColumns: [],
              colorRules,
              maxHeight: "auto",
              emptyStateText: "No hay datos para mostrar",
            },
            hiddenColumns: [],
            isMobile: !1,
            twClass: "",
          },
        },
        Empty = {
          args: {
            columns: exampleColumns,
            data: [],
            paginationConfig: { ...basePagination, pageSize: 2 },
            config: {
              multiSelect: !1,
              sortableColumns: [],
              tagsColumns: [],
              colorRules: {},
              maxHeight: "200px",
              emptyStateText: "No hay datos para mostrar",
            },
            hiddenColumns: [],
            isMobile: !1,
            twClass: "",
          },
        },
        CheckboxesAndSelector = {
          args: {
            columns: [
              { header: "ID", field: "id", width: "50px" },
              { header: "Nombre", field: "name" },
              { header: "Estado", field: "status" },
              {
                header: "Acción",
                field: "action",
                format: "selector",
                selectorOptions: [
                  { Id: "opt1", Description: "Opción 1", Bag: {} },
                  { Id: "opt2", Description: "Opción 2", Bag: {} },
                  { Id: "opt3", Description: "Opción 3", Bag: {} },
                ],
              },
            ],
            data: [
              { id: 1, name: "Juan", status: "Activo", action: "" },
              { id: 2, name: "María", status: "Pendiente", action: "" },
              { id: 3, name: "Mario", status: "Inactivo", action: "" },
              { id: 4, name: "Luisa", status: "Activo", action: "" },
              { id: 5, name: "Carlos", status: "Pendiente", action: "" },
            ],
            paginationConfig: { ...basePagination },
            config: {
              multiSelect: !0,
              sortableColumns: [0, 1, 2],
              tagsColumns: [],
              colorRules: {},
              maxHeight: "250px",
              emptyStateText: "No hay datos para mostrar",
            },
            hiddenColumns: [],
            isMobile: !1,
            twClass: "",
          },
        },
        WithAvatar = {
          args: {
            columns: [
              { header: "ID", field: "id", width: "50px" },
              {
                header: "Avatar",
                field: "name",
                format: "avatar",
                imgField: "avatarUrl",
                width: "50px",
              },
              { header: "Nombre", field: "name" },
              { header: "Estado", field: "status" },
            ],
            data: exampleData,
            paginationConfig: { ...basePagination },
            config: {
              multiSelect: !1,
              sortableColumns: [0, 1, 2, 3],
              tagsColumns: [],
              colorRules,
              maxHeight: "300px",
              emptyStateText: "No hay datos para mostrar",
            },
            hiddenColumns: [],
            isMobile: !1,
            twClass: "",
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    columns: exampleColumns,\n    data: exampleData,\n    paginationConfig: {\n      ...basePagination\n    },\n    config: {\n      multiSelect: false,\n      sortableColumns: [0, 2, 3],\n      tagsColumns: [],\n      colorRules: {},\n      maxHeight: '250px',\n      emptyStateText: 'No hay datos para mostrar'\n    },\n    hiddenColumns: [],\n    isMobile: false,\n    twClass: ''\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
          description: {
            story: "Historia por defecto",
            ...Default.parameters?.docs?.description,
          },
        },
      }),
        (WithColorTags.parameters = {
          ...WithColorTags.parameters,
          docs: {
            ...WithColorTags.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    columns: exampleColumns,\n    data: exampleData,\n    paginationConfig: {\n      ...basePagination\n    },\n    config: {\n      multiSelect: false,\n      sortableColumns: [1, 2],\n      tagsColumns: [],\n      colorRules: colorRules,\n      maxHeight: '300px',\n      emptyStateText: 'No hay datos para mostrar'\n    },\n    hiddenColumns: [],\n    isMobile: false,\n    twClass: ''\n  }\n}",
              ...WithColorTags.parameters?.docs?.source,
            },
            description: {
              story: "Otra historia con colorRules aplicados.",
              ...WithColorTags.parameters?.docs?.description,
            },
          },
        }),
        (SimplePagination.parameters = {
          ...SimplePagination.parameters,
          docs: {
            ...SimplePagination.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    columns: exampleColumns,\n    data: exampleData,\n    paginationConfig: {\n      ...basePagination,\n      hideItemsRange: true,\n      simplePageIndicator: true,\n      nextPage: true\n    },\n    config: {\n      multiSelect: false,\n      sortableColumns: [0, 2, 3],\n      tagsColumns: [],\n      colorRules: {},\n      maxHeight: '250px',\n      emptyStateText: 'No hay datos para mostrar'\n    },\n    hiddenColumns: [],\n    isMobile: false,\n    twClass: ''\n  }\n}",
              ...SimplePagination.parameters?.docs?.source,
            },
            description: {
              story:
                'La paginación se muestra en modo "simple": no se muestra el rango de ítems y\r\nel indicador es "Página n" en vez de "Página n de n".',
              ...SimplePagination.parameters?.docs?.description,
            },
          },
        }),
        (TagNoColor.parameters = {
          ...TagNoColor.parameters,
          docs: {
            ...TagNoColor.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    columns: exampleColumns,\n    data: exampleData,\n    paginationConfig: {\n      ...basePagination\n    },\n    config: {\n      multiSelect: false,\n      sortableColumns: [1, 2],\n      tagsColumns: [2],\n      // Columna 'Estado' en modo tag\n      colorRules: {},\n      // Sin reglas de color\n      maxHeight: '300px',\n      emptyStateText: 'No hay datos para mostrar'\n    },\n    hiddenColumns: [],\n    isMobile: false,\n    twClass: ''\n  }\n}",
              ...TagNoColor.parameters?.docs?.source,
            },
          },
        }),
        (MobileView.parameters = {
          ...MobileView.parameters,
          docs: {
            ...MobileView.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    columns: exampleColumns,\n    data: exampleData,\n    paginationConfig: {\n      ...basePagination\n    },\n    config: {\n      multiSelect: true,\n      sortableColumns: [0, 1, 2],\n      tagsColumns: [],\n      colorRules: colorRules,\n      maxHeight: '400px',\n      emptyStateText: 'No hay datos para mostrar'\n    },\n    hiddenColumns: [],\n    isMobile: true,\n    twClass: 'p-4'\n  }\n}",
              ...MobileView.parameters?.docs?.source,
            },
            description: {
              story: "Historia en modo móvil (cards).",
              ...MobileView.parameters?.docs?.description,
            },
          },
        }),
        (ManualPagination.parameters = {
          ...ManualPagination.parameters,
          docs: {
            ...ManualPagination.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    columns: exampleColumns,\n    data: exampleData,\n    paginationConfig: {\n      ...basePagination,\n      isManualPaginate: true,\n      totalPages: 3,\n      currentPage: 1,\n      pageSize: 2\n    },\n    config: {\n      multiSelect: false,\n      sortableColumns: [0, 2],\n      tagsColumns: [],\n      colorRules: colorRules,\n      maxHeight: 'auto',\n      emptyStateText: 'No hay datos para mostrar'\n    },\n    hiddenColumns: [],\n    isMobile: false,\n    twClass: ''\n  }\n}",
              ...ManualPagination.parameters?.docs?.source,
            },
            description: {
              story: "Historia con paginación manual",
              ...ManualPagination.parameters?.docs?.description,
            },
          },
        }),
        (Empty.parameters = {
          ...Empty.parameters,
          docs: {
            ...Empty.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    columns: exampleColumns,\n    data: [],\n    paginationConfig: {\n      ...basePagination,\n      pageSize: 2\n    },\n    config: {\n      multiSelect: false,\n      sortableColumns: [],\n      tagsColumns: [],\n      colorRules: {},\n      maxHeight: '200px',\n      emptyStateText: 'No hay datos para mostrar'\n    },\n    hiddenColumns: [],\n    isMobile: false,\n    twClass: ''\n  }\n}",
              ...Empty.parameters?.docs?.source,
            },
            description: {
              story: "Historia sin datos",
              ...Empty.parameters?.docs?.description,
            },
          },
        }),
        (CheckboxesAndSelector.parameters = {
          ...CheckboxesAndSelector.parameters,
          docs: {
            ...CheckboxesAndSelector.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    columns: [{\n      header: 'ID',\n      field: 'id',\n      width: '50px'\n    }, {\n      header: 'Nombre',\n      field: 'name'\n    }, {\n      header: 'Estado',\n      field: 'status'\n    }, {\n      header: 'Acción',\n      field: 'action',\n      format: 'selector',\n      selectorOptions: [{\n        Id: 'opt1',\n        Description: 'Opción 1',\n        Bag: {}\n      }, {\n        Id: 'opt2',\n        Description: 'Opción 2',\n        Bag: {}\n      }, {\n        Id: 'opt3',\n        Description: 'Opción 3',\n        Bag: {}\n      }]\n    }],\n    data: [{\n      id: 1,\n      name: 'Juan',\n      status: 'Activo',\n      action: ''\n    }, {\n      id: 2,\n      name: 'María',\n      status: 'Pendiente',\n      action: ''\n    }, {\n      id: 3,\n      name: 'Mario',\n      status: 'Inactivo',\n      action: ''\n    }, {\n      id: 4,\n      name: 'Luisa',\n      status: 'Activo',\n      action: ''\n    }, {\n      id: 5,\n      name: 'Carlos',\n      status: 'Pendiente',\n      action: ''\n    }],\n    paginationConfig: {\n      ...basePagination\n    },\n    config: {\n      multiSelect: true,\n      sortableColumns: [0, 1, 2],\n      tagsColumns: [],\n      colorRules: {},\n      maxHeight: '250px',\n      emptyStateText: 'No hay datos para mostrar'\n    },\n    hiddenColumns: [],\n    isMobile: false,\n    twClass: ''\n  }\n}",
              ...CheckboxesAndSelector.parameters?.docs?.source,
            },
          },
        }),
        (WithAvatar.parameters = {
          ...WithAvatar.parameters,
          docs: {
            ...WithAvatar.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    columns: [{\n      header: 'ID',\n      field: 'id',\n      width: '50px'\n    }, {\n      header: 'Avatar',\n      field: 'name',\n      format: 'avatar',\n      imgField: 'avatarUrl',\n      width: '50px'\n    }, {\n      header: 'Nombre',\n      field: 'name'\n    }, {\n      header: 'Estado',\n      field: 'status'\n    }],\n    data: exampleData,\n    paginationConfig: {\n      ...basePagination\n    },\n    config: {\n      multiSelect: false,\n      sortableColumns: [0, 1, 2, 3],\n      tagsColumns: [],\n      colorRules: colorRules,\n      maxHeight: '300px',\n      emptyStateText: 'No hay datos para mostrar'\n    },\n    hiddenColumns: [],\n    isMobile: false,\n    twClass: ''\n  }\n}",
              ...WithAvatar.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "WithColorTags",
        "SimplePagination",
        "TagNoColor",
        "MobileView",
        "ManualPagination",
        "Empty",
        "CheckboxesAndSelector",
        "WithAvatar",
      ];
    },
  },
]);

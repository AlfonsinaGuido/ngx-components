(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [5889],
  {
    "./projects/ngx-evolution-components/accordion/accordion.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".evo-accordion {\n  width: 100%;\n  background-color: var(--white);\n}\n.evo-accordion mat-divider {\n  margin: 0;\n  border-top: 1px solid var(--light-gray);\n}\n.evo-accordion .accordion-content .accordion-item {\n  display: flex;\n  border: none;\n  flex-direction: row;\n  border-radius: 0px;\n  font-size: 16px;\n  justify-content: space-between;\n  padding: 10px;\n  padding-left: 40px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.evo-accordion .accordion-content.moreOptions {\n  max-height: 0px;\n  overflow-y: auto;\n  height: auto;\n}\n.evo-accordion .accordion-content.moreOptions ::-webkit-scrollbar {\n  width: 8px;\n}\n.evo-accordion .accordion-content.moreOptions ::-webkit-scrollbar-thumb {\n  background-color: var(--dark-gray);\n  border-radius: 10px;\n}\n.evo-accordion .accordion-content.moreOptions ::-webkit-scrollbar-track {\n  background-color: var(--light-gray);\n}\n.evo-accordion .accordion-content.moreOptions ::-webkit-scrollbar-thumb:hover {\n  background-color: var(--primary-color);\n}\n.evo-accordion .accordion-content.moreOptions .accordion-item {\n  padding-left: 10px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n.evo-accordion .accordion-content.moreOptions .accordion-item mat-icon.mat-icon.notranslate.mat-icon-no-color {\n  color: black;\n}\n.evo-accordion .accordion-content.moreOptions .accordion-item div.label {\n  color: black;\n}\n.evo-accordion evo-button button.evo-button.accordion__evo-button {\n  padding-left: 14px;\n  color: black;\n  background-color: transparent;\n  box-shadow: none;\n  border: none !important;\n}\n.evo-accordion evo-button button.evo-button.accordion__evo-button:hover {\n  border: none !important;\n}\n.evo-accordion .accordion-item {\n  border-bottom: 1px solid var(--light-gray);\n}\n.evo-accordion .accordion-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n  cursor: pointer;\n}\n.evo-accordion .accordion-header:hover {\n  background-color: var(--light-gray);\n}\n.evo-accordion .accordion-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease-in-out, overflow 0.3s ease-in-out;\n  overflow-y: auto;\n}\n.evo-accordion .accordion-content.open {\n  transition: max-height 0.3s ease-in-out, overflow 0.3s ease-in-out;\n}\n.evo-accordion .accordion-content::-webkit-scrollbar {\n  width: 6px;\n}\n.evo-accordion .accordion-content::-webkit-scrollbar-track {\n  background: var(--white-smoke);\n}\n.evo-accordion .accordion-content::-webkit-scrollbar-thumb {\n  background-color: var(--light-gray);\n  border-radius: 10px;\n}\n.evo-accordion evo-button .evo-button.without-border.accordion__evo-button-arrow {\n  background-color: transparent;\n  box-shadow: none;\n  border: none !important;\n}\n.evo-accordion evo-button .evo-button.without-border.accordion__evo-button-arrow:hover {\n  border: none !important;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/sidebar/sidebar.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".evo-side-bar {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  /* Variables para el estilo del scrollbar */\n}\n.evo-side-bar .content.with-sidebar-margin {\n  margin-left: 80px;\n}\n.evo-side-bar .sidebar__nav header {\n  height: auto;\n}\n.evo-side-bar .sidebar__footer-options {\n  display: flex;\n  flex-direction: column;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 13px;\n  align-items: center;\n  overflow: hidden;\n  width: 80px;\n}\n.evo-side-bar .sidebar__footer-options:last-of-type {\n  padding-top: 25px;\n}\n.evo-side-bar .sidebar__footer-options p {\n  overflow: hidden;\n  width: 55px;\n  text-align: center;\n  font-size: 10px;\n  color: var(--white);\n}\n.evo-side-bar .sidebar__options {\n  padding-top: 15px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 5px;\n  padding-right: 5px;\n  justify-content: space-between;\n  height: 100%;\n  align-items: center;\n  overflow: hidden;\n  width: 80px;\n}\n.evo-side-bar .sidebar__options:first-of-type {\n  padding-top: 15px;\n}\n.evo-side-bar .sidebar__options p {\n  overflow: hidden;\n  width: 55px;\n  text-align: center;\n  font-size: 10px;\n  color: var(--white);\n}\n.evo-side-bar header .evo-button.without-border.active .evo-button__content .icon svg {\n  color: var(--accent-500);\n}\n.evo-side-bar header button.evo-button.without-border.active {\n  background-color: var(--white);\n}\n.evo-side-bar .sidebar__evo-button {\n  height: 50px;\n}\n.evo-side-bar button.evo-button.without-border:hover {\n  border: none !important;\n}\n.evo-side-bar button.evo-button.without-border {\n  border: none !important;\n}\n.evo-side-bar button.evo-button.is-fluid.sidebar__evo-button.theme-secondary.without-border {\n  justify-content: flex-start;\n  padding-left: 15px;\n  border-radius: 0;\n  border: 0 !important;\n}\n.evo-side-bar button.evo-button.is-fluid.sidebar__evo-button.theme-secondary.without-border:hover {\n  background-color: var(--light-gray);\n}\n.evo-side-bar button.evo-button.is-fluid.sidebar__evo-button.theme-secondary.without-border svg {\n  width: 20px;\n  height: 20px;\n  color: black;\n}\n.evo-side-bar button.evo-button.is-fluid.sidebar__evo-button.theme-secondary.without-border a {\n  color: black;\n  gap: 0;\n}\n.evo-side-bar button.evo-button.is-fluid.sidebar__evo-button.theme-secondary.without-border a div {\n  padding-left: 1px;\n  justify-content: start;\n}\n.evo-side-bar button.evo-button.is-fluid.sidebar__evo-button.theme-secondary.without-border a div div {\n  margin-right: 8px;\n}\n.evo-side-bar button.evo-button.is-fluid.sidebar__evo-button.theme-secondary.without-border {\n  justify-content: flex-start;\n  padding-left: 15px;\n  color: black;\n  border-radius: 0;\n  border: 0 !important;\n}\n.evo-side-bar button.evo-button.is-fluid.sidebar__evo-button.theme-secondary.without-border:hover {\n  background-color: var(--light-gray);\n}\n.evo-side-bar .content__header {\n  background-color: var(--accent-500);\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.evo-side-bar .content__header-left {\n  flex: 1;\n}\n.evo-side-bar .content__header-right {\n  margin-right: 10px;\n}\n.evo-side-bar .content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-top: 60px;\n  width: calc(100% - 80px);\n}\n@media (max-width: 640px) {\n  .evo-side-bar .content {\n    width: 100%;\n  }\n}\n.evo-side-bar .content__main {\n  flex: 1;\n  overflow-y: auto;\n}\n.evo-side-bar .content__toggle {\n  display: none;\n  margin-right: 25px;\n}\n.evo-side-bar .sidebar {\n  position: fixed;\n  top: 60px;\n  width: 80px;\n  background-color: var(--accent-500);\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 60px);\n  z-index: 900;\n  transition: transform 0.3s ease-in-out;\n}\n@media (min-width: 640px) {\n  .evo-side-bar .sidebar {\n    left: 0;\n    z-index: 1;\n  }\n}\n.evo-side-bar .sidebar--mobile {\n  top: 0;\n  right: 0;\n  width: 250px;\n  height: 100%;\n  transform: translateX(100%);\n  background-color: white;\n  z-index: 2000;\n}\n.evo-side-bar .sidebar--open {\n  transform: translateX(0);\n}\n.evo-side-bar .sidebar__nav {\n  flex: 1;\n}\n.evo-side-bar .sidebar__nav ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.evo-side-bar .sidebar__nav ul li {\n  margin: 20px 0;\n}\n@media (max-width: 640px) {\n  .evo-side-bar .sidebar__nav ul li {\n    margin: 0;\n    padding: 10px;\n  }\n}\n.evo-side-bar .sidebar__overlay {\n  display: none;\n}\n@media (max-width: 640px) {\n  .evo-side-bar .sidebar__overlay {\n    display: flex;\n    justify-content: flex-end;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 99;\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n.evo-side-bar .additional-options {\n  background-color: white;\n  height: 100%;\n}\n.evo-side-bar .additional-options hr {\n  border: none;\n  border-top: 1px solid var(--light-gray);\n}\n.evo-side-bar .additional-options .logout {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.evo-side-bar .additional-options .logout:hover {\n  background-color: var(--light-gray);\n}\n.evo-side-bar .additional-options .logout svg {\n  margin-right: 10px;\n}\n@media (max-width: 640px) {\n  .evo-side-bar .mobile-header {\n    display: flex;\n    align-items: center;\n    padding: 10px 5px;\n    background-color: var(--accent-500);\n    color: var(--white);\n  }\n  .evo-side-bar .mobile-header .profile-img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    overflow: hidden;\n    margin-right: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .evo-side-bar .mobile-header .profile-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .evo-side-bar .mobile-header .profile-info .name {\n    font-weight: bold;\n  }\n  .evo-side-bar .sidebar__nav ul li {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n  .evo-side-bar .sidebar__nav ul li:hover {\n    background-color: var(--light-gray);\n  }\n  .evo-side-bar .sidebar__nav ul li svg {\n    margin-right: 10px;\n  }\n  .evo-side-bar .sidebar__nav {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .evo-side-bar .sidebar__footer {\n    flex: 0;\n    display: flex;\n    justify-content: flex-end;\n  }\n  .evo-side-bar .content__toggle {\n    display: block;\n  }\n}\n.evo-side-bar .more-options-wrapper {\n  position: absolute;\n  right: 10px;\n  width: auto;\n  z-index: 1000;\n}\n.evo-side-bar .more-options-content {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.evo-side-bar .more-options-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  justify-items: center;\n}\n.evo-side-bar .option-item {\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n  color: black;\n  align-items: center;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 5px;\n  padding-left: 14px;\n  font-size: 14px;\n  transition: background-color 0.3s ease;\n  cursor: pointer;\n}\n.evo-side-bar .option-item__more-options {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  color: black;\n  align-items: center;\n  overflow: hidden;\n  width: 50px;\n  border-radius: 4px;\n  padding-top: 5px;\n  transition: background-color 0.3s ease;\n  cursor: pointer;\n}\n.evo-side-bar .option-item:hover,\n.evo-side-bar .option-item__more-options:hover {\n  background-color: var(--light-gray);\n}\n.evo-side-bar .option-item p,\n.evo-side-bar .option-item__more-options p {\n  overflow: hidden;\n  width: 55px;\n  text-align: center;\n  font-size: 10px;\n  color: var(--accent-500);\n}\n.evo-side-bar .option-item mat-icon.mat-icon.notranslate.mat-icon-no-color,\n.evo-side-bar .option-item__more-options mat-icon.mat-icon.notranslate.mat-icon-no-color {\n  color: var(--accent-500);\n}\n.evo-side-bar .option-item button.evo-button.rounded-md.outline-none.border-none.font-normal.min-h-9.min-w-18.px-6.py-2.flex.items-center.justify-center.only-icon.theme-default.without-border:hover,\n.evo-side-bar .option-item__more-options button.evo-button.rounded-md.outline-none.border-none.font-normal.min-h-9.min-w-18.px-6.py-2.flex.items-center.justify-center.only-icon.theme-default.without-border:hover {\n  background-color: var(--light-gray);\n  border: none !important;\n}\n.evo-side-bar .more-options-modal::-webkit-scrollbar {\n  width: var(--scrollbar-size);\n}\n.evo-side-bar .more-options-modal::-webkit-scrollbar-track {\n  background: var(--scrollbar-track-color);\n  border-radius: 5px;\n}\n.evo-side-bar .more-options-modal::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-thumb-color);\n  border-radius: 5px;\n}\n@supports not selector(::-webkit-scrollbar) {\n  .evo-side-bar .more-options-modal {\n    scrollbar-width: thin;\n    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);\n  }\n}\n.evo-side-bar .more-options-wrapper {\n  position: absolute;\n  right: 10px;\n  width: auto;\n  z-index: 1000;\n}\n.evo-side-bar .more-options-modal {\n  --scrollbar-track-color: #f1f1f1;\n  --scrollbar-thumb-color: #c1c1c1;\n  --scrollbar-size: 6px;\n  position: absolute;\n  z-index: 1001;\n  background-color: white;\n  max-height: 240px;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 16px;\n  overflow-y: auto;\n  opacity: 0;\n  transform: translateY(-20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n  visibility: hidden;\n}\n.evo-side-bar .more-options-modal.show {\n  opacity: 1;\n  transform: translateY(0);\n  visibility: visible;\n}\n.evo-side-bar .accordion-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease-in-out;\n}\n.evo-side-bar .accordion-content.open {\n  max-height: 200px;\n}\n.evo-side-bar .accordion-content.moreOptions {\n  max-height: 0px;\n  overflow-y: auto;\n  height: auto;\n}\n.evo-side-bar .accordion-content.moreOptions .option-item,\n.evo-side-bar .accordion-content.moreOptions .option-item__more-options {\n  padding-left: 10px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n.evo-side-bar .accordion-content.moreOptions .option-item mat-icon.mat-icon.notranslate.mat-icon-no-color,\n.evo-side-bar .accordion-content.moreOptions .option-item__more-options mat-icon.mat-icon.notranslate.mat-icon-no-color {\n  color: black;\n}\n.evo-side-bar .accordion-content.moreOptions .option-item div.label,\n.evo-side-bar .accordion-content.moreOptions .option-item__more-options div.label {\n  color: black;\n}\n.evo-side-bar .accordion-content.moreOptions .option-item button.evo-button.rounded-md.outline-none.border-none.font-normal.min-h-9.min-w-18.px-6.py-2.flex.items-center.justify-center.is-fluid.theme-secondary.without-border:hover,\n.evo-side-bar .accordion-content.moreOptions .option-item__more-options button.evo-button.rounded-md.outline-none.border-none.font-normal.min-h-9.min-w-18.px-6.py-2.flex.items-center.justify-center.is-fluid.theme-secondary.without-border:hover {\n  border: none !important;\n}\n.evo-side-bar .accordion-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease-in-out;\n}\n.evo-side-bar .accordion-content.open {\n  max-height: 200px;\n}\n.evo-side-bar .close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: black;\n  transition: color 0.3s ease;\n}\n.evo-side-bar .close-button:hover {\n  color: var(--light-gray);\n}\n\n.evo-sidebar__overlay {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 900;\n}\n\n.evo-sidebar__overlay.visible {\n  opacity: 1;\n  visibility: visible;\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/accordion/accordion.component.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        M: () => AccordionComponent,
      });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var accordion_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/accordion/accordion.component.scss?ngResource",
        ),
        accordion_componentngResource_default = __webpack_require__.n(
          accordion_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        class_utility_service = __webpack_require__(
          "./projects/ngx-evolution-components/shared/services/class-utility.service.ts",
        ),
        button_component = __webpack_require__(
          "./projects/ngx-evolution-components/button/button.component.ts",
        );
      let AccordionComponent = class AccordionComponent {
        constructor(classUtility) {
          (this.classUtility = classUtility),
            (this.config = {
              title: "",
              icon: { type: "class", icon: "" },
              height: "auto",
              twClass: "",
            }),
            (this.isOpen = !1);
        }
        get maxHeight() {
          return "auto" === this.config.height ? "none" : this.config.height;
        }
        toggleAccordion() {
          this.isOpen = !this.isOpen;
        }
        getClasses() {
          return this.classUtility.getCombinedClasses(
            "evo-accordion",
            this.config.twClass,
          );
        }
        static #_ = (this.ctorParameters = () => [
          { type: class_utility_service.Y },
        ]);
        static #_2 = (this.propDecorators = { config: [{ type: core.Input }] });
      };
      AccordionComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-accordion",
            standalone: !0,
            template:
              '<div [ngClass]="getClasses()">\n  <div class="accordion-item">\n    <div class="accordion-header" (click)="toggleAccordion()">\n      <evo-button\n        mat-button\n        [label]="config.title"\n        [icon]="config.icon"\n        [withoutBorder]="true"\n        [theme]="\'secondary\'"\n        [isFluid]="true"\n        [twClass]="\'accordion__evo-button\'"\n      ></evo-button>\n      \x3c!-- Botón para abrir/cerrar el acordeón --\x3e\n      <evo-button\n        mat-button\n        [icon]="{\n          type: \'class\',\n          icon: isOpen ? \'expand_less\' : \'expand_more\',\n        }"\n        [withoutBorder]="true"\n        twClass="accordion__evo-button-arrow"\n      ></evo-button>\n    </div>\n    <div>\n      \x3c!-- Opciones dentro del acordeón de configuraciones --\x3e\n      <div\n        class="accordion-content"\n        [ngClass]="{ open: isOpen }"\n        [style.max-height]="isOpen ? maxHeight : \'0\'"\n        [style.overflow]="isOpen ? \'auto\' : \'hidden\'"\n      >\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n',
            imports: [common.CommonModule, button_component.Q],
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              accordion_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        AccordionComponent,
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
    "./stories/sidebar.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => sidebar_stories,
        });
      var dist = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        ),
        tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var sidebar_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/sidebar/sidebar.component.scss?ngResource",
        ),
        sidebar_componentngResource_default = __webpack_require__.n(
          sidebar_componentngResource,
        ),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        viewport_service = __webpack_require__(
          "./projects/ngx-evolution-components/shared/services/viewport.service.ts",
        ),
        class_utility_service = __webpack_require__(
          "./projects/ngx-evolution-components/shared/services/class-utility.service.ts",
        ),
        button_component = __webpack_require__(
          "./projects/ngx-evolution-components/button/button.component.ts",
        ),
        header_component = __webpack_require__(
          "./projects/ngx-evolution-components/header/header.component.ts",
        ),
        avatar_component = __webpack_require__(
          "./projects/ngx-evolution-components/avatar/avatar.component.ts",
        ),
        svg_component = __webpack_require__(
          "./projects/ngx-evolution-components/svg/svg.component.ts",
        ),
        accordion_component = __webpack_require__(
          "./projects/ngx-evolution-components/accordion/accordion.component.ts",
        ),
        router = __webpack_require__(
          "./node_modules/@angular/router/fesm2022/router.mjs",
        ),
        divider = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/divider.mjs",
        ),
        slide_toggle = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/slide-toggle.mjs",
        );
      let SidebarComponent = class SidebarComponent {
        constructor(router, platformId, cdr, viewportService, classUtility) {
          (this.router = router),
            (this.platformId = platformId),
            (this.cdr = cdr),
            (this.viewportService = viewportService),
            (this.classUtility = classUtility),
            (this.isMobile = !1),
            (this.isSidebarOpen = !1),
            (this.activeRoute = ""),
            (this.showMoreOptionsModal = !1),
            (this.accordionOpen = !1),
            (this.appAccordionOpen = !1);
        }
        toggleAccordion() {
          this.accordionOpen = !this.accordionOpen;
        }
        toggleAppAccordion() {
          this.appAccordionOpen = !this.appAccordionOpen;
        }
        ngOnInit() {
          (this.viewportSubscription = this.viewportService
            .getIsMobile()
            .subscribe((isMobile) => {
              (this.isMobile = isMobile), this.adjustSidebar();
            })),
            (0, common.isPlatformBrowser)(this.platformId) &&
              this.subscribeToRouteChanges();
        }
        ngOnDestroy() {
          this.viewportSubscription && this.viewportSubscription.unsubscribe();
        }
        adjustSidebar() {
          this.isSidebarOpen = !this.isMobile;
        }
        ngOnChanges(changes) {
          changes.commonProps &&
            this.commonProps?.userData?.jobPositions?.length &&
            (this.sessionJobPositionName =
              this.commonProps.userData.jobPositions[0].Puesto.Nombre);
        }
        toggleSidebar() {
          (0, common.isPlatformBrowser)(this.platformId) &&
            ((this.isSidebarOpen = !this.isSidebarOpen),
            this.cdr.detectChanges());
        }
        closeSidebar() {
          this.isMobile &&
            (0, common.isPlatformBrowser)(this.platformId) &&
            ((this.isSidebarOpen = !1), this.cdr.detectChanges());
        }
        selectOption(option) {
          (0, common.isPlatformBrowser)(this.platformId) &&
            (option.action
              ? option.action()
              : option.route && this.router.navigate([option.route]),
            this.closeSidebar(),
            this.cdr.detectChanges());
        }
        getClasses() {
          return this.classUtility.getCombinedClasses(
            "evo-side-bar",
            this.twClass,
          );
        }
        subscribeToRouteChanges() {
          (0, common.isPlatformBrowser)(this.platformId) &&
            (this.router.events.subscribe((event) => {
              event instanceof router.wF &&
                (this.activeRoute = event.urlAfterRedirects);
            }),
            (this.activeRoute = this.router.url),
            this.cdr.detectChanges());
        }
        isActive(optionRoute) {
          return this.activeRoute === optionRoute;
        }
        openMoreOptionsModal() {
          this.showMoreOptionsModal = !0;
        }
        closeMoreOptionsModal() {
          this.showMoreOptionsModal = !1;
        }
        static #_ = (this.ctorParameters = () => [
          { type: router.Ix },
          {
            type: Object,
            decorators: [{ type: core.Inject, args: [core.PLATFORM_ID] }],
          },
          { type: core.ChangeDetectorRef },
          { type: viewport_service.K },
          { type: class_utility_service.Y },
        ]);
        static #_2 = (this.propDecorators = {
          commonProps: [{ type: core.Input }],
          options: [{ type: core.Input }],
          additionalOptions: [{ type: core.Input }],
          footerOptions: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
        });
      };
      SidebarComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-sidebar",
            standalone: !0,
            imports: [
              common.CommonModule,
              button_component.Q,
              header_component.l,
              avatar_component.f,
              svg_component.k,
              divider.q,
              slide_toggle.sG,
              accordion_component.M,
            ],
            template:
              '<div\n  class="evo-sidebar__overlay"\n  [ngClass]="{ visible: showMoreOptionsModal }"\n  (click)="closeMoreOptionsModal()"\n></div>\n\x3c!-- Capa de fondo que detecta clics fuera del modal para cerrarlo --\x3e\n\n<div [ngClass]="getClasses()">\n  <header class="content__header">\n    <div class="content__header-left">\n      \x3c!-- Componente de cabecera (header) personalizado --\x3e\n      <evo-header\n        twClass="w-full"\n        [icons]="commonProps.icons"\n        [titles]="commonProps.titles"\n        [items]="commonProps.items"\n        [companyData]="commonProps.companyData"\n        [box]="commonProps.box"\n        [userData]="commonProps.userData"\n      ></evo-header>\n    </div>\n\n    \x3c!-- Mostrar el botón del menú en móvil --\x3e\n    @if (isMobile) {\n      <div\n        class="content__header-right w-8 flex align-center justify-center items-center"\n      >\n        <evo-button\n          mat-button\n          [icon]="commonProps.icons.appMenuIcons.buttonIcon"\n          [withoutBorder]="true"\n          (click)="toggleSidebar()"\n        ></evo-button>\n      </div>\n    }\n  </header>\n\n  \x3c!-- Sidebar para móvil y desktop --\x3e\n  @if (isSidebarOpen) {\n    @if (isMobile) {\n      \x3c!-- Sidebar en versión móvil --\x3e\n      <div class="sidebar sidebar--mobile sidebar--open">\n        <div class="mobile-header">\n          <div class="profile-img">\n            \x3c!-- Componente de avatar con la imagen de usuario --\x3e\n            <evo-avatar\n              size="sm"\n              [name]="commonProps.userData.fullName"\n              [imgUrl]="commonProps.userData.imgUrl"\n              [isPriority]="true"\n            ></evo-avatar>\n          </div>\n          <div class="profile-info">\n            \x3c!-- Información del perfil del usuario --\x3e\n            <div class="name">{{ commonProps.userData.fullName }}</div>\n            <div>{{ sessionJobPositionName }}</div>\n          </div>\n        </div>\n\n        \x3c!-- Menú de navegación del sidebar --\x3e\n        <nav class="sidebar__nav">\n          <ul>\n            @for (option of options; track option.title) {\n              <evo-button\n                [label]="option.title"\n                [icon]="option.icon"\n                [withoutBorder]="true"\n                [theme]="\'secondary\'"\n                [isFluid]="true"\n                [twClass]="\'sidebar__evo-button btn-justify-start align-start\'"\n                (click)="selectOption(option)"\n              ></evo-button>\n            }\n          </ul>\n        </nav>\n\n        \x3c!-- Sección de opciones adicionales en el sidebar --\x3e\n        <div class="additional-options">\n          <mat-divider></mat-divider>\n          <nav class="sidebar__nav">\n            <ul>\n              \x3c!-- Renderizado de las opciones principales de la app --\x3e\n              @if (commonProps.items.appItems) {\n                @for (\n                  option of commonProps.items.appItems;\n                  track option.label\n                ) {\n                  <evo-button\n                    [label]="option.label"\n                    [icon]="option.icon"\n                    [withoutBorder]="true"\n                    [theme]="\'secondary\'"\n                    [isFluid]="true"\n                    [twClass]="\'sidebar__evo-button\'"\n                    [url]="option.url"\n                  ></evo-button>\n                }\n              }\n            </ul>\n          </nav>\n          <mat-divider></mat-divider>\n\n          \x3c!-- Opciones adicionales si las hay --\x3e\n          @if (additionalOptions) {\n            @for (option of additionalOptions; track option.title) {\n              <evo-button\n                [label]="option.title"\n                [icon]="option.icon"\n                [withoutBorder]="true"\n                [theme]="\'secondary\'"\n                [isFluid]="true"\n                twClass="sidebar__evo-button"\n                (click)="selectOption(option)"\n              ></evo-button>\n            }\n            <mat-divider></mat-divider>\n          }\n\n          \x3c!-- Acordeón de configuraciones --\x3e\n          @if (commonProps.titles.settingTitle) {\n            <evo-accordion\n              [config]="{\n                title: commonProps.titles.settingTitle,\n                icon: commonProps.icons?.settingMenuIcons?.buttonIcon || {\n                  type: \'class\',\n                  icon: \'\',\n                },\n                height: \'90px\',\n              }"\n            >\n              \x3c!-- Opciones dentro del acordeón de configuraciones --\x3e\n              @for (\n                option of commonProps.items.settingMenu.options;\n                track option.name\n              ) {\n                <div class="option-item">\n                  <span class="pl-4">{{ option.name }}</span>\n                  <mat-slide-toggle></mat-slide-toggle>\n                </div>\n                <mat-divider></mat-divider>\n              }\n            </evo-accordion>\n          }\n\n          \x3c!-- Segundo acordeón: Más Aplicaciones --\x3e\n          @if (commonProps.moreOptions?.options?.length) {\n            <evo-accordion\n              [config]="{\n                title: \'Más Aplicaciones\',\n                icon: commonProps.icons?.appMenuIcons?.buttonIcon || {\n                  type: \'class\',\n                  icon: \'\',\n                },\n                height: \'157px\',\n              }"\n            >\n              \x3c!-- Lista de aplicaciones adicionales --\x3e\n              @for (app of commonProps.moreOptions?.options; track app.label) {\n                <div class="option-item" (click)="app.action!()">\n                  <evo-button\n                    [label]="app.label"\n                    [icon]="app.icon"\n                    [withoutBorder]="true"\n                    [theme]="\'secondary\'"\n                    [isFluid]="true"\n                    [twClass]="\'sidebar__evo-button\'"\n                  ></evo-button>\n                </div>\n                <mat-divider></mat-divider>\n              }\n            </evo-accordion>\n          }\n          \x3c!-- Botones de opciones relacionadas con el usuario --\x3e\n          @for (option of commonProps.items.userDataItems; track option.label) {\n            @if (option.icon) {\n              <evo-button\n                [label]="option.label"\n                [icon]="option.icon"\n                [withoutBorder]="true"\n                [theme]="\'secondary\'"\n                [isFluid]="true"\n                twClass="sidebar__evo-button"\n                (click)="option.onClick?.action()"\n                [url]="option.url"\n              ></evo-button>\n            }\n          }\n        </div>\n      </div>\n      <div class="sidebar__overlay" (click)="closeSidebar()"></div>\n    }\n  }\n\n  \x3c!-- Sidebar para versión de escritorio --\x3e\n  @if (!isMobile) {\n    <div class="sidebar sidebar--open items-center">\n      <nav class="sidebar__nav">\n        <header>\n          <ul>\n            @for (option of options; track option.title) {\n              <div class="sidebar__options">\n                <evo-button\n                  mat-button\n                  [icon]="option.icon"\n                  [withoutBorder]="true"\n                  (click)="option.action!()"\n                  [twClass]="\n                    option.route ? (isActive(option.route) ? \'active\' : \'\') : \'\'\n                  "\n                ></evo-button>\n                <p class="truncate w-full">{{ option.title }}</p>\n              </div>\n            }\n\n            \x3c!-- Botón de Más Opciones justo debajo del menú --\x3e\n            @if (commonProps.moreOptions?.options?.length) {\n              <div class="sidebar__options">\n                <evo-button\n                  mat-button\n                  [icon]="commonProps.moreOptions?.icon"\n                  [withoutBorder]="true"\n                  (click)="openMoreOptionsModal()"\n                ></evo-button>\n                <p class="truncate w-full">\n                  {{ commonProps.moreOptions?.label }}\n                </p>\n              </div>\n              <div class="more-options-wrapper">\n                \x3c!-- Modal para Más Opciones --\x3e\n                <div\n                  class="more-options-modal"\n                  [ngClass]="{ show: showMoreOptionsModal }"\n                  (click)="$event.stopPropagation()"\n                >\n                  \x3c!-- Botón de cierre (equis) --\x3e\n                  <button\n                    class="close-button"\n                    (click)="closeMoreOptionsModal()"\n                  >\n                    &times;\n                  </button>\n\n                  <div class="more-options-content">\n                    <h3 class="text-center text-base">\n                      {{ commonProps.moreOptions?.insideLabel }}\n                    </h3>\n                    <div class="more-options-grid">\n                      @for (\n                        option of commonProps.moreOptions?.options;\n                        track option.label\n                      ) {\n                        <div\n                          class="option-item__more-options"\n                          (click)="selectOption(option)"\n                        >\n                          <evo-button\n                            mat-button\n                            [icon]="commonProps.moreOptions?.icon"\n                            [withoutBorder]="true"\n                          ></evo-button>\n                          <p class="truncate w-full">\n                            {{ commonProps.moreOptions?.label }}\n                          </p>\n                        </div>\n                      }\n                    </div>\n                  </div>\n                </div>\n              </div>\n            }\n          </ul>\n        </header>\n      </nav>\n\n      \x3c!-- Footer del sidebar en escritorio --\x3e\n      <div class="sidebar__footer">\n        <nav class="sidebar__nav">\n          <header class="mb-2">\n            <ul>\n              @if (footerOptions) {\n                @for (option of footerOptions; track option.title) {\n                  <div class="sidebar__footer-options">\n                    <evo-button\n                      mat-button\n                      [icon]="option.icon"\n                      [withoutBorder]="true"\n                      (click)="selectOption(option)"\n                      [twClass]="\n                        option.route\n                          ? isActive(option.route)\n                            ? \'active\'\n                            : \'\'\n                          : \'\'\n                      "\n                    ></evo-button>\n                    <p class="truncate w-full">{{ option.title }}</p>\n                  </div>\n                }\n              }\n            </ul>\n          </header>\n        </nav>\n      </div>\n    </div>\n  }\n\n  \x3c!-- Contenido principal --\x3e\n  <div class="content" [ngClass]="{ \'with-sidebar-margin\': !isMobile }">\n    <main class="w-full">\n      <ng-content></ng-content>\n    </main>\n  </div>\n</div>\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [sidebar_componentngResource_default()],
          }),
        ],
        SidebarComponent,
      );
      var animations_async = __webpack_require__(
          "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs",
        ),
        http = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/http.mjs",
        );
      const sidebar_stories = {
          title: "Evolution Components/Sidebar",
          component: SidebarComponent,
          decorators: [
            (0, dist.applicationConfig)({
              providers: [(0, animations_async.h)(), (0, http.$R)()],
            }),
          ],
          tags: ["autodocs"],
          argTypes: {
            twClass: { control: { type: "text" } },
            commonProps: {
              description:
                "Common properties shared between the header and the sidebar, including icons, titles, and user data.",
              control: { type: "object" },
            },
            options: {
              description:
                "Sidebar navigation or action options with icons and titles.",
              control: { type: "object" },
            },
            additionalOptions: {
              description:
                "Additional options that will be displayed in the sidebar (only on mobile version).",
              control: { type: "object" },
            },
            footerOptions: {
              description:
                "Options specifically for the footer section of the sidebar.",
              control: { type: "object" },
            },
          },
          args: {
            commonProps: {
              icons: {
                appMenuIcons: {
                  buttonIcon: { icon: "app-menu.svg", type: "svg" },
                },
                authorizationMenuIcons: {
                  buttonIcon: { icon: "fact_check", type: "class" },
                },
                notificationMenuIcons: {
                  buttonIcon: { icon: "bell.svg", type: "svg" },
                },
                settingMenuIcons: {
                  buttonIcon: { icon: "settings.svg", type: "svg" },
                },
              },
              titles: {
                appTitle: "Tus aplicaciones",
                authorizationTitle: "Autorizaciones",
                notificationTitle: "Notificaciones",
                settingTitle: "Ajustes",
              },
              items: {
                appItems: [
                  {
                    label: "Evo Wave",
                    icon: { icon: "company-logo.svg", type: "svg" },
                    url: "https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoWave",
                  },
                  {
                    label: "Evo Chart",
                    icon: { icon: "company-logo.svg", type: "svg" },
                    url: "https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoChart",
                  },
                ],
                authorizationItems: [
                  {
                    label:
                      "Carlos Sanchez requiere autorización de acceso al Programa Recursos Humanos",
                    avatarName: "Carlos Sanchez",
                    avatarImgUrl:
                      "https://material.angular.io/assets/img/examples/shiba1.jpg",
                    onClick: {
                      action: (name = "Carlos Sanchez") => {
                        alert("Se autorizó a " + name);
                      },
                    },
                  },
                  {
                    label:
                      "Samuel Lopez requiere autorización de acceso al Programa Desarrollo",
                    avatarName: "Samuel Lopez",
                    avatarImgUrl:
                      "https://material.angular.io/assets/img/examples/shiba1.jpg",
                    onClick: {
                      action: () => {
                        alert("Se autorizó a Samuel Lopez");
                      },
                    },
                  },
                ],
                notificationItems: [
                  {
                    label: "Carlos Sanchez finalizó Programa Recursos Humanos",
                    avatarName: "Carlos Sanchez",
                    avatarImgUrl:
                      "https://material.angular.io/assets/img/examples/shiba1.jpg",
                    onClick: {
                      action: (name = "Carlos Sanchez") => {
                        alert("Notificación de: " + name);
                      },
                    },
                  },
                ],
                seeAllButton: {
                  seeAllAuthorizations: {
                    label: "Ver todas",
                    onClick: {
                      action: (path = "/autorizaciones") => {
                        alert("Redirige a pantalla: " + path);
                      },
                    },
                  },
                  seeAllNotifications: {
                    label: "Ver todas",
                    onClick: {
                      action: (path = "/notificaciones") => {
                        alert("Redirige a pantalla: " + path);
                      },
                    },
                  },
                },
                settingMenu: {
                  options: [
                    { name: "Apellido primero" },
                    { name: "Autorizaciones" },
                  ],
                },
                userDataItems: [
                  {
                    label: "Administrar Cuenta",
                    icon: { icon: "manage_accounts", type: "class" },
                    url: "https://localhost:7002/identity/account/manage",
                  },
                  {
                    label: "Cerrar Sesión",
                    onClick: {
                      action: () => {
                        alert("Se ejecuta Logout");
                      },
                    },
                  },
                ],
              },
              companyData: {
                companyImage: "company-logo.svg",
                companyName: "ASEINFO",
              },
              userData: {
                fullName: "Stela Lopez",
                email: "slopez@empresa.com",
                jobPositions: [
                  {
                    Puesto: { Nombre: "Gerente Desarrollo" },
                    Unidad: { Descripcion: "Unidad" },
                    Compania: { Descripcion: "Compania" },
                    CentroTrabajo: { Descripcion: "Centro de Trabajo" },
                    onClick: {
                      action: (position = "Gerente Desarrollo") => {
                        alert("Puesto elegido: " + position);
                      },
                    },
                  },
                ],
              },
              moreOptions: {
                label: "Ver más",
                insideLabel: "Más opciones",
                icon: { icon: "dashboard.svg", type: "svg" },
                options: [
                  {
                    label: "Opción 1",
                    icon: { icon: "dashboard.svg", type: "svg" },
                    route: "/opcion1",
                    action: () => alert("Opción 1 seleccionada"),
                  },
                  {
                    label: "Opción 2",
                    icon: { icon: "settings.svg", type: "svg" },
                    route: "/opcion2",
                    action: () => alert("Opción 2 seleccionada"),
                  },
                  {
                    label: "Opción 3",
                    icon: { icon: "files.svg", type: "svg" },
                    route: "/opcion3",
                    action: () => alert("Opción 3 seleccionada"),
                  },
                  {
                    label: "Opción 1",
                    icon: { icon: "dashboard.svg", type: "svg" },
                    route: "/opcion1",
                    action: () => alert("Opción 1 seleccionada"),
                  },
                  {
                    label: "Opción 2",
                    icon: { icon: "settings.svg", type: "svg" },
                    route: "/opcion2",
                    action: () => alert("Opción 2 seleccionada"),
                  },
                  {
                    label: "Opción 3",
                    icon: { icon: "files.svg", type: "svg" },
                    route: "/opcion3",
                    action: () => alert("Opción 3 seleccionada"),
                  },
                  {
                    label: "Opción 1",
                    icon: { icon: "dashboard.svg", type: "svg" },
                    route: "/opcion1",
                    action: () => alert("Opción 1 seleccionada"),
                  },
                  {
                    label: "Opción 2",
                    icon: { icon: "settings.svg", type: "svg" },
                    route: "/opcion2",
                    action: () => alert("Opción 2 seleccionada"),
                  },
                  {
                    label: "Opción 3",
                    icon: { icon: "files.svg", type: "svg" },
                    route: "/opcion3",
                    action: () => alert("Opción 3 seleccionada"),
                  },
                  {
                    label: "Opción 3",
                    icon: { icon: "files.svg", type: "svg" },
                    route: "/opcion3",
                    action: () => alert("Opción 3 seleccionada"),
                  },
                ],
              },
            },
            options: [
              {
                icon: { icon: "dashboard.svg", type: "svg" },
                action: () => alert("Dashboard"),
                route: "/dashboard",
                title: "Dashboard",
              },
              {
                icon: { icon: "files.svg", type: "svg" },
                action: () => alert("Files"),
                route: "/files",
                title: "Files",
              },
            ],
            additionalOptions: [
              {
                icon: { icon: "company-logo.svg", type: "svg" },
                action: () => alert("Dashboard"),
                route: "/dashboard",
                title: "Dashboard",
              },
            ],
            footerOptions: [
              {
                icon: { icon: "settings.svg", type: "svg" },
                action: () => alert("settings"),
                route: "/settings",
                title: "Settings",
              },
              {
                icon: { icon: "dashboard.svg", type: "svg" },
                action: () => alert("dashboard"),
                route: "/dashboard",
                title: "Dashboard",
              },
            ],
            twClass: "",
          },
        },
        Default = {};
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: { originalSource: "{}", ...Default.parameters?.docs?.source },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
  },
]);

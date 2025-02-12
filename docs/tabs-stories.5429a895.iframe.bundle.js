(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [3259],
  {
    "./projects/ngx-evolution-components/tabs/tabs.component.scss?ngResource": (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
          "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
        ),
        ___CSS_LOADER_EXPORT___ = __webpack_require__(
          "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
        )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        ".evo-tabs .mdc-tab {\n  justify-content: left;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.evo-tabs .mat-mdc-tab-body-wrapper {\n  border-top: 1px solid var(--light-gray);\n  padding-top: 12px;\n}",
        "",
      ]),
        (module.exports = ___CSS_LOADER_EXPORT___.toString());
    },
    "./stories/tabs.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => tabs_stories,
        });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs"),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        animations_async = __webpack_require__(
          "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs",
        );
      var tabs_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/tabs/tabs.component.scss?ngResource",
        ),
        tabs_componentngResource_default = __webpack_require__.n(
          tabs_componentngResource,
        ),
        outputngResource = __webpack_require__(
          "./projects/ngx-evolution-components/styles/output.scss?ngResource",
        ),
        outputngResource_default = __webpack_require__.n(outputngResource),
        tabs = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/tabs.mjs",
        ),
        badge = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/badge.mjs",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        );
      let TabsComponent = class TabsComponent {
        constructor() {
          (this.tabs = []),
            (this.selectedIndex = 0),
            (this.selectedIndexChange = new core.EventEmitter());
        }
        static #_ = (this.propDecorators = {
          tabs: [{ type: core.Input }],
          selectedIndex: [{ type: core.Input }],
          twClass: [{ type: core.Input }],
          selectedIndexChange: [{ type: core.Output }],
        });
      };
      TabsComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-tabs",
            standalone: !0,
            imports: [tabs.RI, badge.Y, common.NgTemplateOutlet],
            template:
              '<mat-tab-group\n  (selectedIndexChange)="selectedIndexChange.emit($event)"\n  animationDuration="0ms"\n  [selectedIndex]="selectedIndex"\n  color="accent"\n  class="evo-tabs {{ twClass }}"\n>\n  @for (tab of tabs; track $index) {\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <span\n          [matBadge]="tab.badgeValue"\n          matBadgeOverlap="false"\n          [matBadgeHidden]="tab.badgeValue === 0"\n          matBadgeColor="warn"\n          class="text-dark-gray text-base font-bold"\n          >{{ tab.label }}</span\n        >\n      </ng-template>\n      <ng-container *ngTemplateOutlet="tab.content"></ng-container>\n    </mat-tab>\n  }\n</mat-tab-group>\n',
            encapsulation: core.ViewEncapsulation.None,
            styles: [
              tabs_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        TabsComponent,
      );
      var dist = __webpack_require__(
        "./node_modules/@storybook/angular/dist/index.mjs",
      );
      let TabContentComponent = class TabContentComponent {
        static #_ = (this.propDecorators = {
          tabContent1: [
            { type: core.ViewChild, args: ["tabContent1", { static: !0 }] },
          ],
          tabContent2: [
            { type: core.ViewChild, args: ["tabContent2", { static: !0 }] },
          ],
        });
      };
      TabContentComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "app-tab-content",
            template:
              "\n    <ng-template #tabContent1 matTabContent><div>Programas</div></ng-template>\n    <ng-template #tabContent2 matTabContent><div>Tabla</div></ng-template>\n  ",
          }),
        ],
        TabContentComponent,
      );
      const tabs_stories = {
          title: "Evolution Components/Tabs",
          component: TabsComponent,
          decorators: [
            (0, dist.applicationConfig)({
              providers: [(0, animations_async.h)()],
            }),
            (0, dist.moduleMetadata)({ declarations: [TabContentComponent] }),
          ],
          tags: ["autodocs"],
        },
        Default = {
          render: (args) => ({
            props: args,
            template:
              '\n      <app-tab-content #tabContent></app-tab-content>\n      <evo-tabs\n        [tabs]="[\n          { label: tabs[0]?.label, badgeValue: tabs[0]?.badgeValue, content: tabContent.tabContent1 },\n          { label: tabs[1]?.label, badgeValue: tabs[1]?.badgeValue, content: tabContent.tabContent2 },\n        ]"\n        [selectedIndex]="selectedIndex"\n        [twClass]="twClass"\n      >\n      </evo-tabs>\n    ',
          }),
          args: {
            selectedIndex: 0,
            tabs: [
              { label: "Asignar", badgeValue: 0, content: "" },
              { label: "Gestionar", badgeValue: 4, content: "" },
            ],
            twClass: "",
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: args => ({\n    props: args,\n    template: `\n      <app-tab-content #tabContent></app-tab-content>\n      <evo-tabs\n        [tabs]=\"[\n          { label: tabs[0]?.label, badgeValue: tabs[0]?.badgeValue, content: tabContent.tabContent1 },\n          { label: tabs[1]?.label, badgeValue: tabs[1]?.badgeValue, content: tabContent.tabContent2 },\n        ]\"\n        [selectedIndex]=\"selectedIndex\"\n        [twClass]=\"twClass\"\n      >\n      </evo-tabs>\n    `\n  }),\n  args: {\n    selectedIndex: 0,\n    tabs: [{\n      label: 'Asignar',\n      badgeValue: 0,\n      content: '' as any as TemplateRef<any>\n    }, {\n      label: 'Gestionar',\n      badgeValue: 4,\n      content: '' as any as TemplateRef<any>\n    }],\n    twClass: ''\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
  },
]);

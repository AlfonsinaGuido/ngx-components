(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [5772],
  {
    "./projects/ngx-evolution-components/avatar/avatar.component.scss?ngResource":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js",
          ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__(
            "./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js",
          )(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".avatar__size-sm {\n\n    width: 2rem;\n\n    height: 2rem;\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem\n}\n\n.avatar__size-md {\n\n    width: 3rem;\n\n    height: 3rem;\n\n    font-size: 1.125rem;\n\n    line-height: 1.75rem\n}\n\n.avatar__size-lg {\n\n    width: 4rem;\n\n    height: 4rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem\n}\n\n.avatar__blue {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(239 246 255 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(37 99 235 / var(--tw-text-opacity))\n}\n\n.avatar__red {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(254 242 242 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(239 68 68 / var(--tw-text-opacity))\n}\n\n.avatar__purple {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(243 232 255 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(147 51 234 / var(--tw-text-opacity))\n}\n\n.avatar__pink {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(252 231 243 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(219 39 119 / var(--tw-text-opacity))\n}\n\n.avatar__orange {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(255 237 213 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(234 88 12 / var(--tw-text-opacity))\n}\n\n.avatar__stone {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(245 245 244 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(41 37 36 / var(--tw-text-opacity))\n}\n\n.avatar__yellow {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(254 252 232 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(234 179 8 / var(--tw-text-opacity))\n}\n\n.avatar__green {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(220 252 231 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(21 128 61 / var(--tw-text-opacity))\n}\n\n.avatar__gray {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(31 41 55 / var(--tw-text-opacity))\n}\n\n.avatar__indigo {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(238 242 255 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(99 102 241 / var(--tw-text-opacity))\n}\n\n.avatar__teal {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(204 251 241 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(13 148 136 / var(--tw-text-opacity))\n}",
          "",
        ]),
          (module.exports = ___CSS_LOADER_EXPORT___.toString());
      },
    "./projects/ngx-evolution-components/avatar/avatar.component.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { f: () => AvatarComponent });
      var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
      var avatar_componentngResource = __webpack_require__(
          "./projects/ngx-evolution-components/avatar/avatar.component.scss?ngResource",
        ),
        avatar_componentngResource_default = __webpack_require__.n(
          avatar_componentngResource,
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
        tooltip = __webpack_require__(
          "./node_modules/@angular/material/fesm2022/tooltip.mjs",
        );
      let AvatarComponent = class AvatarComponent {
        constructor() {
          (this.size = "md"),
            (this.isPriority = !1),
            (this.tooltipDisabled = !0),
            (this.colorArray = [
              "red",
              "purple",
              "blue",
              "green",
              "gray",
              "stone",
              "yellow",
              "orange",
              "pink",
              "indigo",
              "teal",
            ]);
        }
        ngOnChanges(changes) {
          changes.name &&
            ((this.color = this.color || this.getAvatarColor()),
            this.setIniciales());
        }
        setIniciales() {
          if (((this.name = this.name.trim()), this.name)) {
            const splitNames = this.name.split(" ");
            this.iniciales = splitNames
              .reduce(
                (acc, curr) => (curr ? acc + curr[0].toUpperCase() : acc),
                "",
              )
              .slice(0, 2);
          } else this.iniciales = "XX";
        }
        getAvatarColor() {
          return this.colorArray[this.name.length % this.colorArray.length];
        }
        static #_ = (this.ctorParameters = () => []);
        static #_2 = (this.propDecorators = {
          size: [{ type: core.Input }],
          name: [{ type: core.Input }],
          imgUrl: [{ type: core.Input }],
          isPriority: [{ type: core.Input }],
          color: [{ type: core.Input }],
          tooltipDisabled: [{ type: core.Input }],
        });
      };
      AvatarComponent = (0, tslib_es6.Cg)(
        [
          (0, core.Component)({
            selector: "evo-avatar",
            standalone: !0,
            imports: [common.CommonModule, tooltip.uc],
            template:
              '<div\n  id="avatar-wrapper"\n  class="relative rounded-full overflow-hidden flex items-center justify-center"\n  [class]="[\'avatar__\' + color, \'avatar__size-\' + size].join(\' \')"\n  [matTooltip]="name"\n  [matTooltipDisabled]="tooltipDisabled"\n>\n  @if (!imgUrl) {\n    <span class="font-semibold" [class]="\'avatar__\' + color">{{\n      iniciales\n    }}</span>\n  } @else {\n    <img\n      [class]="\'avatar__size-\' + size + \' object-cover\'"\n      [src]="imgUrl"\n      [attr.loading]="!isPriority ? \'lazy\' : null"\n      alt="Avatar Icon"\n    />\n  }\n</div>\n',
            styles: [
              avatar_componentngResource_default(),
              outputngResource_default(),
            ],
          }),
        ],
        AvatarComponent,
      );
    },
    "./stories/avatar.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          fotoDePerfil: () => fotoDePerfil,
          iniciales: () => iniciales,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
          component: __webpack_require__(
            "./projects/ngx-evolution-components/avatar/avatar.component.ts",
          ).f,
          title: "Evolution Components/Avatar",
          tags: ["autodocs"],
          argTypes: {
            name: { type: "string", description: "Nombre del empleado" },
            size: {
              type: "string",
              control: { type: "inline-radio" },
              options: ["sm", "md", "lg"],
            },
            imgUrl: {
              type: "string",
              description:
                "Url de la imagen del empleado. Si no se provee, se usarán iniciales",
            },
            isPriority: {
              type: "boolean",
              description:
                "Se usa para cargar la imagen de manera diferida cuando no es prioridad. Caso contrario, la carga de img será inmediata.",
            },
            color: {
              type: "string",
              options: [
                "red",
                "purple",
                "blue",
                "green",
                "gray",
                "stone",
                "pink",
                "yellow",
                "orange",
              ],
              control: { type: "select" },
              description: "Colores disponbiles (de tailwind) para seleccionar",
            },
          },
          args: { size: "md", name: "Doge Le Grande" },
        },
        fotoDePerfil = {
          args: {
            size: "lg",
            isPriority: !0,
            imgUrl:
              "https://material.angular.io/assets/img/examples/shiba1.jpg",
          },
        },
        iniciales = {
          args: { size: "lg", name: "Alfonso Gonzalez", color: "green" },
        };
      (fotoDePerfil.parameters = {
        ...fotoDePerfil.parameters,
        docs: {
          ...fotoDePerfil.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    size: 'lg',\n    isPriority: true,\n    imgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'\n  }\n}",
            ...fotoDePerfil.parameters?.docs?.source,
          },
        },
      }),
        (iniciales.parameters = {
          ...iniciales.parameters,
          docs: {
            ...iniciales.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    size: 'lg',\n    name: 'Alfonso Gonzalez',\n    color: 'green'\n  }\n}",
              ...iniciales.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ["fotoDePerfil", "iniciales"];
    },
  },
]);

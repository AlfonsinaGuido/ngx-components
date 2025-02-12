"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [5200],
  {
    "./stories/carta-actividad.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          porVencer: () => porVencer,
          sinAvatar: () => sinAvatar,
          sinFechaFin: () => sinFechaFin,
          sinFooter: () => sinFooter,
          sinTagDePrioridad: () => sinTagDePrioridad,
          soloTituloYDescripcion: () => soloTituloYDescripcion,
          vencida: () => vencida,
        });
      var _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/carta-actividad/carta-actividad.component.ts",
          ),
        _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/shared/data/kanban/actividades.data.ts",
          );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          component:
            _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_0__.e,
          title: "Evolution Components/Kanban/Carta Actividad",
          tags: ["autodocs"],
          excludeStories: /.*Data$/,
        },
        today = new Date(),
        yesterday = new Date(today.setDate(today.getDate() - 1)),
        pastToday = new Date(today.setDate(today.getDate() + 5)),
        Default = {
          argTypes: { twClass: { control: { type: "text" } } },
          args: {
            actividad:
              _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__.XK,
            endDate:
              _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__
                .XK.FechaFin,
            tooltipSoonToExpire: "Próxima a vencer",
            tooltipExpired: "Vencida",
          },
        },
        porVencer = {
          args: {
            actividad:
              _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__.XK,
            endDate: yesterday,
            tooltipSoonToExpire: "Próxima a vencer",
          },
        },
        vencida = {
          args: {
            actividad:
              _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__.XK,
            endDate: pastToday,
            tooltipExpired: "Vencida",
          },
        },
        sinTagDePrioridad = {
          args: {
            actividad: {
              ..._aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__.XK,
              prioridad: void 0,
            },
            endDate:
              _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__
                .XK.FechaFin,
          },
        },
        sinAvatar = {
          args: {
            actividad: {
              ..._aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__.XK,
              responsable: "",
            },
            endDate:
              _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__
                .XK.FechaFin,
          },
        },
        sinFechaFin = {
          args: {
            actividad:
              _aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__.XK,
          },
        },
        sinFooter = {
          args: {
            actividad: {
              ..._aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__.XK,
              responsable: "",
            },
          },
        },
        soloTituloYDescripcion = {
          args: {
            actividad: {
              ..._aseinfo_ngx_evolution_components_shared_data_kanban_actividades_data__WEBPACK_IMPORTED_MODULE_1__.XK,
              responsable: "",
              prioridad: void 0,
            },
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  argTypes: {\n    twClass: {\n      control: {\n        type: 'text'\n      }\n    }\n  },\n  args: {\n    actividad,\n    endDate: actividad.FechaFin,\n    tooltipSoonToExpire: 'Próxima a vencer',\n    tooltipExpired: 'Vencida'\n  }\n} as StoryObj<CartaActividadComponent>",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (porVencer.parameters = {
          ...porVencer.parameters,
          docs: {
            ...porVencer.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actividad,\n    endDate: yesterday,\n    tooltipSoonToExpire: 'Próxima a vencer'\n  }\n} as StoryObj<CartaActividadComponent>",
              ...porVencer.parameters?.docs?.source,
            },
          },
        }),
        (vencida.parameters = {
          ...vencida.parameters,
          docs: {
            ...vencida.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actividad,\n    endDate: pastToday,\n    tooltipExpired: 'Vencida'\n  }\n} as StoryObj<CartaActividadComponent>",
              ...vencida.parameters?.docs?.source,
            },
          },
        }),
        (sinTagDePrioridad.parameters = {
          ...sinTagDePrioridad.parameters,
          docs: {
            ...sinTagDePrioridad.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actividad: {\n      ...actividad,\n      prioridad: undefined\n    },\n    endDate: actividad.FechaFin\n  }\n} as StoryObj<CartaActividadComponent>",
              ...sinTagDePrioridad.parameters?.docs?.source,
            },
          },
        }),
        (sinAvatar.parameters = {
          ...sinAvatar.parameters,
          docs: {
            ...sinAvatar.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actividad: {\n      ...actividad,\n      responsable: ''\n    },\n    endDate: actividad.FechaFin\n  }\n} as StoryObj<CartaActividadComponent>",
              ...sinAvatar.parameters?.docs?.source,
            },
          },
        }),
        (sinFechaFin.parameters = {
          ...sinFechaFin.parameters,
          docs: {
            ...sinFechaFin.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actividad\n  }\n} as StoryObj<CartaActividadComponent>",
              ...sinFechaFin.parameters?.docs?.source,
            },
          },
        }),
        (sinFooter.parameters = {
          ...sinFooter.parameters,
          docs: {
            ...sinFooter.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actividad: {\n      ...actividad,\n      responsable: ''\n    }\n  }\n} as StoryObj<CartaActividadComponent>",
              ...sinFooter.parameters?.docs?.source,
            },
          },
        }),
        (soloTituloYDescripcion.parameters = {
          ...soloTituloYDescripcion.parameters,
          docs: {
            ...soloTituloYDescripcion.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    actividad: {\n      ...actividad,\n      responsable: '',\n      prioridad: undefined\n    }\n  }\n} as StoryObj<CartaActividadComponent>",
              ...soloTituloYDescripcion.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "porVencer",
        "vencida",
        "sinTagDePrioridad",
        "sinAvatar",
        "sinFechaFin",
        "sinFooter",
        "soloTituloYDescripcion",
      ];
    },
  },
]);

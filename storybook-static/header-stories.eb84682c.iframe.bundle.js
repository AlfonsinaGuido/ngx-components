"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [6096],
  {
    "./stories/header.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithCompanyName: () => WithCompanyName,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/header/header.component.ts",
          ),
        _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@storybook/angular/dist/index.mjs",
        ),
        _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@angular/platform-browser/fesm2022/animations/async.mjs",
          ),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/http.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Evolution Components/Header",
          component:
            _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_1__.l,
          decorators: [
            (0,
            _storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({
              providers: [
                (0,
                _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_2__.h)(),
                (0, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.$R)(),
              ],
            }),
          ],
          tags: ["autodocs"],
        },
        Default = {
          args: {
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
                {
                  label:
                    "Ignacio Fernandez requiere autorización de acceso al Programa Recursos Humanos",
                  avatarName: "Ignacio Fernandez",
                  avatarImgUrl:
                    "https://material.angular.io/assets/img/examples/shiba1.jpg",
                  onClick: {
                    action: (name = "Ignacio Fernandez") => {
                      alert("Se autorizó a " + name);
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
                      alert("Notificación de " + name);
                    },
                  },
                },
                {
                  label: "Samuel Lopez finalizó Programa Desarrollo",
                  avatarName: "Samuel Lopez",
                  avatarImgUrl:
                    "https://material.angular.io/assets/img/examples/shiba1.jpg",
                  onClick: {
                    action: () => {
                      alert("Notificación de Samuel Lopez");
                    },
                  },
                },
                {
                  label: "Ignacio Fernandez finalizó Programa Recursos Humanos",
                  avatarName: "Ignacio Fernandez",
                  avatarImgUrl:
                    "https://material.angular.io/assets/img/examples/shiba1.jpg",
                  onClick: {
                    action: (name = "Ignacio Fernandez") => {
                      alert("Notificación de " + name);
                    },
                  },
                },
                {
                  label: "Ramiro Gomez finalizó Programa Desarrollo",
                  avatarName: "Ramiro Gomez",
                  avatarImgUrl:
                    "https://material.angular.io/assets/img/examples/shiba1.jpg",
                  onClick: {
                    action: (name = "Ramiro Gomez") => {
                      alert("Notificación de " + name);
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
            companyData: { companyImage: "company-logo.svg" },
            box: [
              {
                label: "Alguna Acción",
                onClick: {
                  action: () => {
                    alert("Se realiza alguna acción");
                  },
                },
              },
            ],
            userData: {
              fullName: "Stela Lopez",
              email: "slopez@empresa.com",
              jobPositions: [
                {
                  CompaniaCodigo: 180,
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
                {
                  CompaniaCodigo: 190,
                  Puesto: { Nombre: "Gerente Calidad" },
                  Unidad: { Descripcion: "Unidad" },
                  Compania: { Descripcion: "Compania" },
                  CentroTrabajo: { Descripcion: "Centro de Trabajo" },
                  onClick: {
                    action: (position = "Gerente Calidad") => {
                      alert("Puesto elegido: " + position);
                    },
                  },
                },
              ],
            },
            twClass: "",
          },
        },
        WithCompanyName = {
          args: {
            ...Default.args,
            companyData: {
              companyName: "ASEINFO",
              companyImage: "company-logo.svg",
            },
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    icons: {\n      appMenuIcons: {\n        buttonIcon: {\n          icon: 'app-menu.svg',\n          type: 'svg'\n        }\n      },\n      authorizationMenuIcons: {\n        buttonIcon: {\n          icon: 'fact_check',\n          type: 'class'\n        }\n      },\n      notificationMenuIcons: {\n        buttonIcon: {\n          icon: 'bell.svg',\n          type: 'svg'\n        }\n      },\n      settingMenuIcons: {\n        buttonIcon: {\n          icon: 'settings.svg',\n          type: 'svg'\n        }\n      }\n    },\n    titles: {\n      appTitle: 'Tus aplicaciones',\n      authorizationTitle: 'Autorizaciones',\n      notificationTitle: 'Notificaciones',\n      settingTitle: 'Ajustes'\n    },\n    items: {\n      appItems: [{\n        label: 'Evo Wave',\n        icon: {\n          icon: 'company-logo.svg',\n          type: 'svg'\n        },\n        url: 'https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoWave'\n      }, {\n        label: 'Evo Chart',\n        icon: {\n          icon: 'company-logo.svg',\n          type: 'svg'\n        },\n        url: 'https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoChart'\n      }],\n      authorizationItems: [{\n        label: 'Carlos Sanchez requiere autorización de acceso al Programa Recursos Humanos',\n        avatarName: 'Carlos Sanchez',\n        avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n        onClick: {\n          action: (name = 'Carlos Sanchez') => {\n            alert('Se autorizó a ' + name);\n          }\n        }\n      }, {\n        label: 'Samuel Lopez requiere autorización de acceso al Programa Desarrollo',\n        avatarName: 'Samuel Lopez',\n        avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n        onClick: {\n          action: () => {\n            alert('Se autorizó a Samuel Lopez');\n          }\n        }\n      }, {\n        label: 'Ignacio Fernandez requiere autorización de acceso al Programa Recursos Humanos',\n        avatarName: 'Ignacio Fernandez',\n        avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n        onClick: {\n          action: (name = 'Ignacio Fernandez') => {\n            alert('Se autorizó a ' + name);\n          }\n        }\n      }],\n      notificationItems: [{\n        label: 'Carlos Sanchez finalizó Programa Recursos Humanos',\n        avatarName: 'Carlos Sanchez',\n        avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n        onClick: {\n          action: (name = 'Carlos Sanchez') => {\n            alert('Notificación de ' + name);\n          }\n        }\n      }, {\n        label: 'Samuel Lopez finalizó Programa Desarrollo',\n        avatarName: 'Samuel Lopez',\n        avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n        onClick: {\n          action: () => {\n            alert('Notificación de Samuel Lopez');\n          }\n        }\n      }, {\n        label: 'Ignacio Fernandez finalizó Programa Recursos Humanos',\n        avatarName: 'Ignacio Fernandez',\n        avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n        onClick: {\n          action: (name = 'Ignacio Fernandez') => {\n            alert('Notificación de ' + name);\n          }\n        }\n      }, {\n        label: 'Ramiro Gomez finalizó Programa Desarrollo',\n        avatarName: 'Ramiro Gomez',\n        avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n        onClick: {\n          action: (name = 'Ramiro Gomez') => {\n            alert('Notificación de ' + name);\n          }\n        }\n      }],\n      seeAllButton: {\n        seeAllAuthorizations: {\n          label: 'Ver todas',\n          onClick: {\n            action: (path = '/autorizaciones') => {\n              alert('Redirige a pantalla: ' + path);\n            }\n          }\n        },\n        seeAllNotifications: {\n          label: 'Ver todas',\n          onClick: {\n            action: (path = '/notificaciones') => {\n              alert('Redirige a pantalla: ' + path);\n            }\n          }\n        }\n      },\n      settingMenu: {\n        options: [{\n          name: 'Apellido primero'\n        }, {\n          name: 'Autorizaciones'\n        }]\n      },\n      userDataItems: [{\n        label: 'Administrar Cuenta',\n        icon: {\n          icon: 'manage_accounts',\n          type: 'class'\n        },\n        url: 'https://localhost:7002/identity/account/manage'\n      }, {\n        label: 'Cerrar Sesión',\n        onClick: {\n          action: () => {\n            alert('Se ejecuta Logout');\n          }\n        }\n      }]\n    },\n    companyData: {\n      companyImage: 'company-logo.svg'\n    },\n    box: [{\n      label: 'Alguna Acción',\n      onClick: {\n        action: () => {\n          alert('Se realiza alguna acción');\n        }\n      }\n    }],\n    userData: {\n      fullName: 'Stela Lopez',\n      email: 'slopez@empresa.com',\n      jobPositions: [{\n        CompaniaCodigo: 180,\n        Puesto: {\n          Nombre: 'Gerente Desarrollo'\n        },\n        Unidad: {\n          Descripcion: 'Unidad'\n        },\n        Compania: {\n          Descripcion: 'Compania'\n        },\n        CentroTrabajo: {\n          Descripcion: 'Centro de Trabajo'\n        },\n        onClick: {\n          action: (position = 'Gerente Desarrollo') => {\n            alert('Puesto elegido: ' + position);\n          }\n        }\n      }, {\n        CompaniaCodigo: 190,\n        Puesto: {\n          Nombre: 'Gerente Calidad'\n        },\n        Unidad: {\n          Descripcion: 'Unidad'\n        },\n        Compania: {\n          Descripcion: 'Compania'\n        },\n        CentroTrabajo: {\n          Descripcion: 'Centro de Trabajo'\n        },\n        onClick: {\n          action: (position = 'Gerente Calidad') => {\n            alert('Puesto elegido: ' + position);\n          }\n        }\n      }]\n    },\n    twClass: ''\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithCompanyName.parameters = {
          ...WithCompanyName.parameters,
          docs: {
            ...WithCompanyName.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    ...Default.args,\n    companyData: {\n      companyName: 'ASEINFO',\n      companyImage: 'company-logo.svg'\n    }\n  }\n}",
              ...WithCompanyName.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ["Default", "WithCompanyName"];
    },
  },
]);

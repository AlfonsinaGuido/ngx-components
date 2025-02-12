"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [7126],
  {
    "./stories/menu.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AuthorizationsMenu: () => AuthorizationsMenu,
          Default: () => Default,
          NotificationsMenu: () => NotificationsMenu,
          SettingsMenu: () => SettingsMenu,
          UserMenu: () => UserMenu,
          WithScroll: () => WithScroll,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./projects/ngx-evolution-components/menu/menu.component.ts",
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
          title: "Evolution Components/Menu",
          component:
            _aseinfo_ngx_evolution_components_public_api__WEBPACK_IMPORTED_MODULE_1__.Z,
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
              buttonIcon: { icon: "app-menu.svg", type: "svg" },
              closeIcon: { icon: "close.svg", type: "svg" },
            },
            title: "Tus aplicaciones",
            items: [
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
            twClass: "",
          },
        },
        AuthorizationsMenu = {
          args: {
            icons: {
              buttonIcon: { icon: "fact_check", type: "class" },
              closeIcon: { icon: "close.svg", type: "svg" },
            },
            title: "Autorizaciones",
            lengthOfItems: 3,
            seeAllButton: {
              label: "Ver todas",
              onClick: {
                action: (path = "/autorizaciones") => {
                  alert("Redirige a pantalla: " + path);
                },
              },
            },
            items: [
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
            twClass: "",
          },
        },
        NotificationsMenu = {
          args: {
            icons: {
              buttonIcon: { icon: "bell.svg", type: "svg" },
              closeIcon: { icon: "close.svg", type: "svg" },
            },
            title: "Notificaciones",
            lengthOfItems: 3,
            seeAllButton: {
              label: "Ver todas",
              onClick: {
                action: (path = "/notificaciones") => {
                  alert("Redirige a pantalla: " + path);
                },
              },
            },
            items: [
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
              {
                label: "Samuel Lopez finalizó Programa Desarrollo",
                avatarName: "Samuel Lopez",
                avatarImgUrl:
                  "https://material.angular.io/assets/img/examples/shiba1.jpg",
                onClick: {
                  action: (name = "Samuel Lopez") => {
                    alert("Notificación de: " + name);
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
                    alert("Notificación de: " + name);
                  },
                },
              },
            ],
            twClass: "",
          },
        },
        WithScroll = {
          args: {
            ...(() => {
              const { seeAllButton, ...rest } = NotificationsMenu.args;
              return rest;
            })(),
            lengthOfItems: 15,
            items: [
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
              {
                label: "Samuel Lopez finalizó Programa Desarrollo",
                avatarName: "Samuel Lopez",
                avatarImgUrl:
                  "https://material.angular.io/assets/img/examples/shiba1.jpg",
                onClick: {
                  action: (name = "Samuel Lopez") => {
                    alert("Notificación de: " + name);
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
                    alert("Notificación de: " + name);
                  },
                },
              },
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
              {
                label: "Samuel Lopez finalizó Programa Desarrollo",
                avatarName: "Samuel Lopez",
                avatarImgUrl:
                  "https://material.angular.io/assets/img/examples/shiba1.jpg",
                onClick: {
                  action: (name = "Samuel Lopez") => {
                    alert("Notificación de: " + name);
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
                    alert("Notificación de: " + name);
                  },
                },
              },
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
              {
                label: "Samuel Lopez finalizó Programa Desarrollo",
                avatarName: "Samuel Lopez",
                avatarImgUrl:
                  "https://material.angular.io/assets/img/examples/shiba1.jpg",
                onClick: {
                  action: (name = "Samuel Lopez") => {
                    alert("Notificación de: " + name);
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
                    alert("Notificación de: " + name);
                  },
                },
              },
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
              {
                label: "Samuel Lopez finalizó Programa Desarrollo",
                avatarName: "Samuel Lopez",
                avatarImgUrl:
                  "https://material.angular.io/assets/img/examples/shiba1.jpg",
                onClick: {
                  action: (name = "Samuel Lopez") => {
                    alert("Notificación de: " + name);
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
                    alert("Notificación de: " + name);
                  },
                },
              },
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
              {
                label: "Samuel Lopez finalizó Programa Desarrollo",
                avatarName: "Samuel Lopez",
                avatarImgUrl:
                  "https://material.angular.io/assets/img/examples/shiba1.jpg",
                onClick: {
                  action: (name = "Samuel Lopez") => {
                    alert("Notificación de: " + name);
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
                    alert("Notificación de: " + name);
                  },
                },
              },
            ],
          },
        },
        SettingsMenu = {
          args: {
            icons: {
              buttonIcon: { icon: "settings.svg", type: "svg" },
              closeIcon: { icon: "close.svg", type: "svg" },
            },
            title: "Ajustes",
            settingMenu: {
              options: [
                { name: "Apellido primero" },
                { name: "Autorizaciones" },
              ],
            },
            twClass: "",
          },
        },
        UserMenu = {
          args: {
            icons: { closeIcon: { icon: "close.svg", type: "svg" } },
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
                {
                  CompaniaCodigo: 200,
                  Puesto: { Nombre: "Community Manager" },
                  Unidad: { Descripcion: "Unidad" },
                  Compania: { Descripcion: "Compania" },
                  CentroTrabajo: { Descripcion: "Centro de Trabajo" },
                  onClick: {
                    action: (position = "Community Manager") => {
                      alert("Puesto elegido: " + position);
                    },
                  },
                },
              ],
            },
            items: [
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
            twClass: "",
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    icons: {\n      buttonIcon: {\n        icon: 'app-menu.svg',\n        type: 'svg'\n      },\n      closeIcon: {\n        icon: 'close.svg',\n        type: 'svg'\n      }\n    },\n    title: 'Tus aplicaciones',\n    items: [{\n      label: 'Evo Wave',\n      icon: {\n        icon: 'company-logo.svg',\n        type: 'svg'\n      },\n      url: 'https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoWave'\n    }, {\n      label: 'Evo Chart',\n      icon: {\n        icon: 'company-logo.svg',\n        type: 'svg'\n      },\n      url: 'https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoChart'\n    }],\n    twClass: ''\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (AuthorizationsMenu.parameters = {
          ...AuthorizationsMenu.parameters,
          docs: {
            ...AuthorizationsMenu.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    icons: {\n      buttonIcon: {\n        icon: 'fact_check',\n        type: 'class'\n      },\n      closeIcon: {\n        icon: 'close.svg',\n        type: 'svg'\n      }\n    },\n    title: 'Autorizaciones',\n    lengthOfItems: 3,\n    seeAllButton: {\n      label: 'Ver todas',\n      onClick: {\n        action: (path = '/autorizaciones') => {\n          alert('Redirige a pantalla: ' + path);\n        }\n      }\n    },\n    items: [{\n      label: 'Carlos Sanchez requiere autorización de acceso al Programa Recursos Humanos',\n      avatarName: 'Carlos Sanchez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Carlos Sanchez') => {\n          alert('Se autorizó a ' + name);\n        }\n      }\n    }, {\n      label: 'Samuel Lopez requiere autorización de acceso al Programa Desarrollo',\n      avatarName: 'Samuel Lopez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: () => {\n          alert('Se autorizó a Samuel Lopez');\n        }\n      }\n    }, {\n      label: 'Ignacio Fernandez requiere autorización de acceso al Programa Recursos Humanos',\n      avatarName: 'Ignacio Fernandez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Ignacio Fernandez') => {\n          alert('Se autorizó a ' + name);\n        }\n      }\n    }],\n    twClass: ''\n  }\n}",
              ...AuthorizationsMenu.parameters?.docs?.source,
            },
          },
        }),
        (NotificationsMenu.parameters = {
          ...NotificationsMenu.parameters,
          docs: {
            ...NotificationsMenu.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    icons: {\n      buttonIcon: {\n        icon: 'bell.svg',\n        type: 'svg'\n      },\n      closeIcon: {\n        icon: 'close.svg',\n        type: 'svg'\n      }\n    },\n    title: 'Notificaciones',\n    lengthOfItems: 3,\n    seeAllButton: {\n      label: 'Ver todas',\n      onClick: {\n        action: (path = '/notificaciones') => {\n          alert('Redirige a pantalla: ' + path);\n        }\n      }\n    },\n    items: [{\n      label: 'Carlos Sanchez finalizó Programa Recursos Humanos',\n      avatarName: 'Carlos Sanchez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Carlos Sanchez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Samuel Lopez finalizó Programa Desarrollo',\n      avatarName: 'Samuel Lopez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Samuel Lopez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Ignacio Fernandez finalizó Programa Recursos Humanos',\n      avatarName: 'Ignacio Fernandez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Ignacio Fernandez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }],\n    twClass: ''\n  }\n}",
              ...NotificationsMenu.parameters?.docs?.source,
            },
          },
        }),
        (WithScroll.parameters = {
          ...WithScroll.parameters,
          docs: {
            ...WithScroll.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    ...(() => {\n      const {\n        seeAllButton,\n        ...rest\n      } = NotificationsMenu.args as {\n        seeAllButton?: IButton;\n      };\n      return rest;\n    })(),\n    lengthOfItems: 15,\n    items: [{\n      label: 'Carlos Sanchez finalizó Programa Recursos Humanos',\n      avatarName: 'Carlos Sanchez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Carlos Sanchez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Samuel Lopez finalizó Programa Desarrollo',\n      avatarName: 'Samuel Lopez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Samuel Lopez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Ignacio Fernandez finalizó Programa Recursos Humanos',\n      avatarName: 'Ignacio Fernandez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Ignacio Fernandez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Carlos Sanchez finalizó Programa Recursos Humanos',\n      avatarName: 'Carlos Sanchez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Carlos Sanchez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Samuel Lopez finalizó Programa Desarrollo',\n      avatarName: 'Samuel Lopez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Samuel Lopez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Ignacio Fernandez finalizó Programa Recursos Humanos',\n      avatarName: 'Ignacio Fernandez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Ignacio Fernandez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Carlos Sanchez finalizó Programa Recursos Humanos',\n      avatarName: 'Carlos Sanchez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Carlos Sanchez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Samuel Lopez finalizó Programa Desarrollo',\n      avatarName: 'Samuel Lopez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Samuel Lopez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Ignacio Fernandez finalizó Programa Recursos Humanos',\n      avatarName: 'Ignacio Fernandez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Ignacio Fernandez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Carlos Sanchez finalizó Programa Recursos Humanos',\n      avatarName: 'Carlos Sanchez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Carlos Sanchez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Samuel Lopez finalizó Programa Desarrollo',\n      avatarName: 'Samuel Lopez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Samuel Lopez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Ignacio Fernandez finalizó Programa Recursos Humanos',\n      avatarName: 'Ignacio Fernandez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Ignacio Fernandez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Carlos Sanchez finalizó Programa Recursos Humanos',\n      avatarName: 'Carlos Sanchez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Carlos Sanchez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Samuel Lopez finalizó Programa Desarrollo',\n      avatarName: 'Samuel Lopez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Samuel Lopez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }, {\n      label: 'Ignacio Fernandez finalizó Programa Recursos Humanos',\n      avatarName: 'Ignacio Fernandez',\n      avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',\n      onClick: {\n        action: (name = 'Ignacio Fernandez') => {\n          alert('Notificación de: ' + name);\n        }\n      }\n    }]\n  }\n}",
              ...WithScroll.parameters?.docs?.source,
            },
          },
        }),
        (SettingsMenu.parameters = {
          ...SettingsMenu.parameters,
          docs: {
            ...SettingsMenu.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    icons: {\n      buttonIcon: {\n        icon: 'settings.svg',\n        type: 'svg'\n      },\n      closeIcon: {\n        icon: 'close.svg',\n        type: 'svg'\n      }\n    },\n    title: 'Ajustes',\n    settingMenu: {\n      options: [{\n        name: 'Apellido primero'\n      }, {\n        name: 'Autorizaciones'\n      }]\n    },\n    twClass: ''\n  }\n}",
              ...SettingsMenu.parameters?.docs?.source,
            },
          },
        }),
        (UserMenu.parameters = {
          ...UserMenu.parameters,
          docs: {
            ...UserMenu.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    icons: {\n      closeIcon: {\n        icon: 'close.svg',\n        type: 'svg'\n      }\n    },\n    userData: {\n      fullName: 'Stela Lopez',\n      email: 'slopez@empresa.com',\n      jobPositions: [{\n        CompaniaCodigo: 180,\n        Puesto: {\n          Nombre: 'Gerente Desarrollo'\n        },\n        Unidad: {\n          Descripcion: 'Unidad'\n        },\n        Compania: {\n          Descripcion: 'Compania'\n        },\n        CentroTrabajo: {\n          Descripcion: 'Centro de Trabajo'\n        },\n        onClick: {\n          action: (position = 'Gerente Desarrollo') => {\n            alert('Puesto elegido: ' + position);\n          }\n        }\n      }, {\n        CompaniaCodigo: 190,\n        Puesto: {\n          Nombre: 'Gerente Calidad'\n        },\n        Unidad: {\n          Descripcion: 'Unidad'\n        },\n        Compania: {\n          Descripcion: 'Compania'\n        },\n        CentroTrabajo: {\n          Descripcion: 'Centro de Trabajo'\n        },\n        onClick: {\n          action: (position = 'Gerente Calidad') => {\n            alert('Puesto elegido: ' + position);\n          }\n        }\n      }, {\n        CompaniaCodigo: 200,\n        Puesto: {\n          Nombre: 'Community Manager'\n        },\n        Unidad: {\n          Descripcion: 'Unidad'\n        },\n        Compania: {\n          Descripcion: 'Compania'\n        },\n        CentroTrabajo: {\n          Descripcion: 'Centro de Trabajo'\n        },\n        onClick: {\n          action: (position = 'Community Manager') => {\n            alert('Puesto elegido: ' + position);\n          }\n        }\n      }]\n    },\n    items: [{\n      label: 'Administrar Cuenta',\n      icon: {\n        icon: 'manage_accounts',\n        type: 'class'\n      },\n      url: 'https://localhost:7002/identity/account/manage'\n    }, {\n      label: 'Cerrar Sesión',\n      onClick: {\n        action: () => {\n          alert('Se ejecuta Logout');\n        }\n      }\n    }],\n    twClass: ''\n  }\n}",
              ...UserMenu.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "AuthorizationsMenu",
        "NotificationsMenu",
        "WithScroll",
        "SettingsMenu",
        "UserMenu",
      ];
    },
  },
]);

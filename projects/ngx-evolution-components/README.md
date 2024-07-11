# NgxEvolutionComponents

Esta librería fue generada con [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0 con componentes independientes, Storybook, Angular Material, Tailwind y SASS.

## Andamiaje de código

Dentro de la ruta `projects/ngx-evolution-components` ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.
> Nota: Si tiene más de una librería, no olvide agregar `--project library-name` o se agregará al proyecto predeterminado en su archivo `angular.json`.

## Construcción

Ejecuta `ng build ngx-evolution-components` para construir el proyecto. Los artefactos de la construcción se almacenarán en el directorio `dist/`.

## Publicación

Después de construir su biblioteca con `ng build ngx-evolution-components`, ve a la carpeta dist `cd dist/@aseinfo/ngx-evolution-components` y ejecuta `npm publish`.

## Construcción y publicación en Verdaccio

Verdaccio es un registro privado de paquetes de código para npm.

Requisitos previos:

-Instalar de manera global verdaccio ejecutando `npm install --global verdaccio`.
-Levantar el servidor ejecutando `verdaccio`. Esto permitirá ver los paquetes publicados en `http://localhost:4873/`.

Para construir y publicar la librería en Verdaccio en su última versión ejecuta `npm run prepare-storybook`.

Para eliminar versiones anteriores ejecuta este comando con el número de versión que deseas eliminar `npm unpublish ngx-evolution-components@0.0.1 --registry http://localhost:4873 --force`.

## Ejecución de pruebas unitarias

Ejecuta `ng test ngx-evolution-components` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ayuda adicional

Para obtener más ayuda sobre Angular CLI, usa `ng help` o consulta la página de [Visión general y referencia de comandos de Angular CLI](https://angular.io/cli).

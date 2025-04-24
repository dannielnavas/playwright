# Guía de Playwright

Este proyecto contiene pruebas automatizadas utilizando Playwright.

## Comandos Principales

### Grabación de Pruebas

```bash
npx playwright codegen
```

Este comando inicia un navegador que graba tus interacciones con una página web y genera automáticamente el código de prueba correspondiente.

### Ejecución de Pruebas

```bash
npx playwright test
```

Este comando ejecuta todas las pruebas definidas en el proyecto.

### Ejecución de pruebas con navegador visible

```bash
npx playwright test --headed
```

Este comando ejecuta las pruebas con el navegador visible, útil para depuración.

### Ejecución de pruebas específicas

```bash
npx playwright test uitesting --headed
```

Ejecuta un archivo de prueba específico (en este caso 'uitesting') con el navegador visible.

### Visualización de Reportes

```bash
npx playwright show-report
```

Abre el reporte HTML con los resultados de las pruebas ejecutadas.

## Modo Debug

Playwright ofrece potentes herramientas de depuración que te ayudarán a identificar y resolver problemas en tus pruebas.

### Iniciar Modo Debug

```bash
npx playwright test assert --debug
```

Este comando inicia el modo debug para el archivo de prueba 'assert'. El navegador se abrirá y la ejecución se pausará al inicio de la prueba.

### Debug con Console

```bash
PWDEBUG=console npx playwright test assert
```

Este comando habilita el modo debug con acceso a la consola de desarrollo, permitiendo una interacción más detallada con la página.

### Comandos Útiles en la Consola de Debug

En el modo debug, tienes acceso al objeto `playwright` en la consola del navegador con las siguientes funciones útiles:

- `playwright.$('selector')` - Encuentra y retorna el primer elemento que coincida con el selector (similar a document.querySelector)
- `playwright.$$('selector')` - Encuentra y retorna todos los elementos que coincidan con el selector (similar a document.querySelectorAll)
- `playwright.inspect('selector')` - Activa el inspector de elementos y resalta el elemento seleccionado
- `playwright.selector($0)` - Genera un selector óptimo para el elemento actualmente seleccionado en el inspector

### Tips para el Modo Debug

- Usa `await` con los comandos de playwright en la consola (ej: `await playwright.$('input')`)
- Puedes alternar entre el modo paso a paso y la ejecución continua
- El inspector de elementos te permite identificar selectores óptimos para tus pruebas
- Presiona 'Resume' (F8) para continuar la ejecución después de un punto de interrupción

## Estructura del Proyecto

- `tests/` - Directorio que contiene las pruebas principales
  - `example.spec.ts` - Pruebas básicas de navegación en Platzi
  - `uitesting.spec.ts` - Pruebas de UI en uitestingplayground.com
- `tests-examples/` - Directorio con ejemplos de pruebas
  - `demo-todo-app.spec.ts` - Pruebas completas de una aplicación TODO
- `playwright-report/` - Directorio donde se generan los reportes de las pruebas
- `test-results/` - Directorio que almacena los resultados de las pruebas

## Casos de Prueba Implementados

### UI Testing Playground

- Interacción con elementos dinámicos
- Manejo de Shadow DOM
- Pruebas en capas ocultas
- Navegación entre páginas

### Demo TODO App

- Creación y edición de tareas
- Marcado de tareas como completadas
- Persistencia de datos
- Filtrado de tareas
- Validación de contadores

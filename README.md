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

## Modo debug

```bash
npx playwright test assert --debug
```

Abre el test en modo debug

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

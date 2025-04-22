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

## Estructura del Proyecto

- `tests/` - Directorio que contiene las pruebas principales
- `tests-examples/` - Directorio con ejemplos de pruebas
- `playwright-report/` - Directorio donde se generan los reportes de las pruebas
- `test-results/` - Directorio que almacena los resultados de las pruebas

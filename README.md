# Guía de Playwright

## 📖 Introducción

Este proyecto contiene pruebas automatizadas utilizando Playwright, un framework moderno para automatización de pruebas end-to-end.

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js instalado
- npm o yarn como gestor de paquetes

### Instalación

```bash
npm install
```

## 🛠️ Comandos Principales

### Grabación de Pruebas Automáticas

```bash
npx playwright codegen
```

Este comando abre un navegador instrumentado que:

- Graba tus interacciones con la página web
- Genera automáticamente el código de prueba correspondiente
- Permite identificar selectores fácilmente

### Ejecución de Pruebas

| Comando | Descripción |
|---------|-------------|
| `npx playwright test` | Ejecuta todas las pruebas en modo headless |
| `npx playwright test --headed` | Ejecuta pruebas con navegador visible |
| `npx playwright test [archivo]` | Ejecuta un archivo específico |
| `npx playwright test --project=chromium` | Ejecuta pruebas solo en Chromium |

### Reportes y Resultados

```bash
npx playwright show-report
```

Genera y abre un reporte HTML detallado con:

- Resultados de las pruebas
- Capturas de pantalla
- Trazas de ejecución
- Logs detallados

## 🐛 Herramientas de Depuración

### Modo Debug Interactivo

```bash
npx playwright test [archivo] --debug
```

Características:

- Pausa la ejecución al inicio de la prueba
- Permite navegación paso a paso
- Muestra el estado de la página en cada paso
- Proporciona herramientas de inspección

### Modo Debug con Consola

```bash
PWDEBUG=console npx playwright test [archivo]
```

### Herramientas de Debug Disponibles

| Comando | Descripción |
|---------|-------------|
| `playwright.$('selector')` | Busca el primer elemento que coincida |
| `playwright.$$('selector')` | Busca todos los elementos coincidentes |
| `playwright.inspect('selector')` | Activa el inspector de elementos |
| `playwright.selector($0)` | Genera selector óptimo del elemento seleccionado |

### Logging de API

```bash
set DEBUG=pw:api && npx playwright test
```

Muestra logs detallados de las interacciones con la API.

## 📁 Estructura del Proyecto

```
├── tests/                     # Pruebas principales
│   ├── assert.spec.ts        # Pruebas de aserciones
│   ├── ecommerce.spec.ts     # Pruebas de e-commerce
│   ├── example.spec.ts       # Ejemplos básicos
│   └── uitesting.spec.ts     # Pruebas de UI
├── tests-examples/           # Ejemplos adicionales
├── playwright-report/        # Reportes generados
└── test-results/            # Resultados de ejecución
```

## 📋 Casos de Prueba

### UI Testing Playground

- ✅ Interacción con elementos dinámicos
- ✅ Manejo de Shadow DOM
- ✅ Pruebas en capas ocultas
- ✅ Navegación entre páginas

### E-commerce

- 🛒 Flujo de compra
- 🔍 Búsqueda de productos
- 🛍️ Carrito de compras
- 💳 Proceso de pago

### Demo TODO App

- ✏️ Gestión de tareas
- ✅ Estados de completado
- 🔄 Persistencia de datos
- 🏷️ Filtrado y etiquetado

## 💡 Mejores Prácticas

1. Usar selectores robustos y mantenibles
2. Implementar esperas explícitas cuando sea necesario
3. Mantener las pruebas independientes
4. Documentar casos de prueba complejos
5. Utilizar datos de prueba consistentes

## 🤝 Contribución

1. Fork el repositorio
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

# apiCucumberTest

Este proyecto es una automatización de pruebas para un endpoint de registro utilizando Cucumber, TypeScript y Chai. Se utiliza MockAPI para simular las respuestas de la API

##### Requisitos #####

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node)

##### Estructura #####

/apiCucumberTest
├── features/
│   └── registro.feature # Archivo con el escenario en sintaxis Gherkin
├── steps/
│   └── registro.steps.ts # Implementación en TypeScript de los steps definidos en el feature
├── cucumber.js # Archivo de configuración de Cucumber
├── package.json # Archivo con las dependencias y scripts del proyecto
├── tsconfig.json # Configuración de TypeScript
└── node_modules/ # Carpeta generada tras npm install


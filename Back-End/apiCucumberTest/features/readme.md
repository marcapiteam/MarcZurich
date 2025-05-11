# Proyecto de Registro en MockAPI

Este proyecto utiliza Cucumber y Chai para realizar pruebas de registro en una API simulada proporcionada por MockAPI.

## Archivos

### `registro.steps.ts`

Este archivo contiene los pasos definidos para las pruebas de registro. Utiliza Cucumber para definir los pasos y Chai para las aserciones. También se utiliza Axios para enviar solicitudes HTTP a la API.

#### Pasos Definidos

- **Given que tengo los datos de registro válidos**: Define los datos válidos para el registro.
- **Given que tengo los datos de registro inválidos**: Define los datos inválidos para el registro.
- **When envío una solicitud de registro a la API**: Envía una solicitud de registro con datos válidos.
- **When envío una solicitud de registro a la API con datos inválidos**: Envía una solicitud de registro con datos inválidos.
- **Then debería recibir un estado {int}**: Verifica que el estado de la respuesta sea el esperado.
- **Then la respuesta contiene un JSON válido**: Verifica que la respuesta contenga un JSON válido con las propiedades esperadas.
- **Then la respuesta no muestra nada**: Verifica que la respuesta sea 'Invalid request'.
- **Then la respuesta debería contener un json válido**: Verifica que la respuesta sea un objeto JSON válido.

### `registro.feature`

Este archivo define los escenarios de prueba para el registro en la API.

#### Escenarios

- **Registro exitoso con datos válidos**:
  - **Given** que tengo los datos de registro válidos
  - **When** envío una solicitud de registro a la API
  - **Then** debería recibir un estado 201
  - **And** la respuesta debería contener un json válido

- **Registro fallido con datos inválidos**:
  - **Given** que tengo los datos de registro inválidos
  - **When** envío una solicitud de registro a la API con datos inválidos
  - **Then** debería recibir un estado 400
  - **And** la respuesta no muestra nada

## Cómo Ejecutar las Pruebas

npx cucumber-js

Nota: La URL de la API utilizada en las pruebas es https://681f1acc72e59f922ef53fa6.mockapi.io/users.
# Proyecto de Automatización de Pruebas - Zurich Seguros

Este repositorio contiene las pruebas automatizadas para el formulario de contacto en el sitio web de Zurich Seguros, utilizando Cucumber y WebDriverIO con TypeScript.

## Características

La característica principal que cubre este proyecto es verificar el comportamiento de la página cuando el usuario intenta enviar el formulario de contacto sin aceptar los términos legales.

### Feature: El usuario intenta enviar el formulario de contacto sin aceptar los términos

El siguiente escenario prueba que el sistema muestra un mensaje de error cuando el usuario intenta enviar el formulario sin marcar la casilla de "Acepto los términos legales".

### Escenario: El usuario intenta enviar el formulario de contacto sin aceptar los términos

```gherkin
Feature: El usuario intenta enviar el formulario de contacto sin aceptar los términos

  Scenario: User tries to submit contact form without accepting terms
    Given que estoy en la página de inicio de Zurich Seguros
    When acepto todas las cookies si se me solicita
    And hago clic en "Saber más" en la sección "Seguro de Coche"
    And hago clic en el botón "Te llamamos"
    And relleno el campo "Nombre y apellidos" con "Test QA Zurich"
    And selecciono "Sí" en "¿Eres cliente?"
    And relleno el campo "NIF" con "20418021R"
    And relleno el campo "Teléfono" con "123456789"
    When hago clic en el horario "17"
    And relleno el campo "Email" con "fakezurich@gmail.com"
    And relleno el campo "Código Postal" con "08980"
    And no marco la casilla "Acepto los términos legales"
    And hago clic en el botón "Enviar"
    Then debería ver un mensaje de error "Debes aceptar los términos legales para continuar"


```ts
await HomePage.login('4444444X', 'Sabadell');
await expect(HomePage.cajaRoja).toBeDisplayed();

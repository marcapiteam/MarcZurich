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
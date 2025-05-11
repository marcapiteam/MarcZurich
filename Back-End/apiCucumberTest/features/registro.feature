Feature: Registro en MockAPI

  Scenario: Registro exitoso con datos válidos
    Given que tengo los datos de registro válidos
    When envío una solicitud de registro a la API
    Then debería recibir un estado 201
    And la respuesta debería contener un json válido

  Scenario: Registro fallido con datos inválidos
    Given que tengo los datos de registro inválidos
    When envío una solicitud de registro a la API con datos inválidos
    Then debería recibir un estado 400
    And la respuesta no muestra nada
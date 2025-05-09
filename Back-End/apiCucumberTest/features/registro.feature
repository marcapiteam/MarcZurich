Feature: Registro en MockAPI

  Scenario: Registro exitoso con datos válidos
    Given que tengo los datos de registro válidos
    When enviar registro
    Then debería recibir un estado 200
 

  Scenario: Registro fallido con datos inválidos
    Given que tengo los datos de registro inválidos
    When enviar registro
    Then debería recibir un estado 404

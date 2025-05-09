Feature: Validación del ejercicio propuesto de front-end para Zurich

  Scenario: Imposibilidad de hacer login con usuario y contraseña erróneos
    Given el usuario accede a la página de Zurich Empresas
    When acepta todas las cookies si el botón está presente
    And hace clic en el botón tu cuenta
    And introduce el dni "4444444X"
    And introduce la Contraseña "Sabadell"
    And hace clic en el botón Iniciar sesión
    Then debería ver un mensaje de error que dice "Tu usuario o contraseña es erróneo, por favor inténtalo de nuevo."

  Scenario: Imposibilidad de hacer login sin contraseña 
    Given el usuario accede a la página de Zurich Empresas
    When hace clic en el botón tu cuenta
    And introduce el dni "4444444X"
    And introduce la Contraseña ""
    And hace clic en el botón Iniciar sesión
    Then debería mostrarse la caja contraseña en rojo
    
  Scenario: Buscar un agente
    Given el usuario accede a la página de Zurich Empresas
    When hace clic en el botón buscar agente
Feature: Listar empresas

  Scenario: Listar todas as empresas
    Given que a API de empresas está disponível
    When eu faço uma requisição GET para "/api/company"
    Then a resposta deve retornar o código de status 200
    And deve retornar uma lista de empresas

  Scenario: Obter uma empresa por ID
    Given que a API de empresas está disponível
    When eu faço uma requisição GET para "/api/company/1"
    Then a resposta deve retornar o código de status 200
    And deve retornar os dados da empresa

  Scenario: Tentar obter uma empresa com ID inválido
    Given que a API de empresas está disponível
    When eu faço uma requisição GET para "/api/company/0"
    Then a resposta deve retornar o código de status 400
    And a mensagem de erro "Invalid company ID!" deve ser retornada

  Scenario: Tentar obter uma empresa com ID inexistente
    Given que a API de empresas está disponível
    When eu faço uma requisição GET para "/api/company/1000"
    Then a resposta deve retornar o código de status 404
    And a mensagem de erro "requested data not found!" deve ser retornada
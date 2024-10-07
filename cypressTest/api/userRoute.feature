Feature:  Listar Usuários

  Scenario: Obter todos os usuários com sucesso
    Given que a API de usuários está disponível
    When eu faço uma requisição GET para "/api/user"
    Then a resposta deve retornar o código de status 200

  Scenario: Obter um usuário existente por ID
    Given que a API de usuários está disponível
    When eu faço uma requisição GET para "/api/user/{id}"
    Then a resposta deve retornar o código de status 200
    And deve conter os dados do usuário


Scenario: Tentar obter um usuário invalido por ID
    Given que a API de usuários está disponível
    When eu faço uma requisição GET para "/api/user/{id}" com um ID inválido
    Then a resposta deve retornar o código de status 400
    And a mensagem de erro "invalid data!" deve ser retornada

Scenario: Tentar obter um usuário inexistente por ID
    Given que a API de usuários está disponível
    When eu faço uma requisição GET para "/api/user/{id}" com um ID inválido
    Then a resposta deve retornar o código de status 404
    And a mensagem de erro "requested data not found!" deve ser retornada


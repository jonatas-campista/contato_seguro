Feature: Atualizar Usuário

#http://localhost:8400/api/user/136/update
#foi verificado que o problema esta na function validateBody que nao esta fazendo a validaçao corretamente
#gerando o erro: array_intersect(): Argument #1 ($array) must be of type array, null given

  Scenario: Atualizar um usuário com sucesso
    Given que a API de atualização de usuários está disponível
    When eu faço uma requisição PATCH para "/api/user/1/update" com o corpo:
      | name            | email                     | companies                     |
      | "João Silva" | "joao@exemplo.com"  | ["Compliance Total"]   |
    Then a resposta deve retornar o código de status 200

  Scenario: Tentar atualizar um usuário com ID inválido
    Given que a API de atualização de usuários está disponível
    When eu faço uma requisição PATCH para "/api/user/0/update" com o corpo:
      | name            | email                     | companies                     |
      | "João Silva" | "joao@exemplo.com"  | ["Compliance Total"]   |
    Then a resposta deve retornar o código de status 400
    And a mensagem de erro invalid data!" deve ser retornada


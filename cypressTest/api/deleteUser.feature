Feature: Deletar Usuário

  Scenario: Deletar um usuário com sucesso
    Given que a API de deleção de usuários está disponível
    And o usuário com ID "1" existe
    When eu faço uma requisição DELETE para "/api/user/120/delete"
    Then a resposta deve retornar o código de status 200
    And deve retornar a mensagem de confirmação de deleção

  Scenario: Tentar deletar um usuário com ID inválido
    Given que a API de deleção de usuários está disponível
    When eu faço uma requisição DELETE para "/api/user/0/delete"
    Then a resposta deve retornar o código de status 400
    And a mensagem de erro "invalid data!" deve ser retornada

  Scenario: Tentar deletar um usuário com ID inválido
    Given que a API de deleção de usuários está disponível
    When eu faço uma requisição DELETE para "/api/user/500/delete"
    Then a resposta deve retornar o código de status 404
    And a mensagem de erro "unable to delete data!" deve ser retornada


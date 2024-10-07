Feature: Deletar Empresa

  Scenario: Deletar uma empresa com sucesso
    Given que a API de deleção de empresas está disponível
    When eu faço uma requisição DELETE para "/api/company/1/delete"
    Then a resposta deve retornar o código de status 200
    And deve retornar uma mensagem de confirmação de deleção

  Scenario: Tentar deletar uma empresa com ID inválido
    Given que a API de deleção de empresas está disponível
    When eu faço uma requisição DELETE para "/api/company/0/delete"
    Then a resposta deve retornar o código de status 400
    And deve retornar a mensagem de erro "invalid data!"

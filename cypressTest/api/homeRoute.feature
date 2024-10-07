Feature: Home Route

  Scenario: Verificar a rota home com sucesso
    Given que a API está disponível
    When eu faço uma requisição GET para "/"
    Then a resposta deve retornar o código de status 200
    And a mensagem deve ser "home"

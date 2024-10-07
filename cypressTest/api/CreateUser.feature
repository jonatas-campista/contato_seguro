Feature: Adição de usuario

#http://localhost:8400/api/user/create
#esta criando o usuario porem esta caindo no catch gerando o erro 500 
#com a mensagem : "message": "an error occured during request execution!" 

Scenario: Criar um novo usuário
    Given que a API de criação de usuários está disponível
    When eu faço uma requisição POST para "/api/user/create" com o corpo:
      | name      | email             | companies                  |
      | "John Doe" | "john@example.com" | ["Compliance Total"] |
    Then a resposta deve retornar o código de status 201
    And deve conter os dados do usuário criado

Scenario: Tentar criar um novo usuário com dados inválidos
    Given que a API de criação de usuários está disponível
    When eu faço uma requisição POST para "/api/user/create" com o corpo inválido:
      | name | e-mail | companies |
      | "João Silva"   | "joao@exemplo.com"     | ["Compliance Total"]        |
    Then a resposta deve retornar o código de status 400
    And a mensagem de erro "Dados inválidos" deve ser retornada


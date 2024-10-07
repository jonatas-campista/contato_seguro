Feature: Adição de Empresas

  Scenario: Criar uma nova empresa
    Given que a API de criação de empresas está disponível
    When eu faço uma requisição POST para "/api/company/create" com o corpo:
      | name           | cnpj            | cep        | country | state | city         | street          | number | district  |
      | "Nova Empresa" | "12.345.678/0001-90" | "12345-678" | "Brasil" | "SP"  | "São Paulo"  | "Rua Exemplo"   | "100"   | "Centro"  |
    Then a resposta deve retornar o código de status 201
    And deve conter os dados da empresa criada

  Scenario: Tentar criar uma empresa com dados inválidos
    Given que a API de criação de empresas está disponível
    When eu faço uma requisição POST para "/api/company/create" com o corpo inválido:
      | name | cnpj | adress               |
      | ""   | ""   | {"cep": "", "country": "", "state": "", "city": "", "street": "", "number": "", "district": ""} |
    Then a resposta deve retornar o código de status 400
    And a mensagem de erro "Invalid data!" deve ser retornada

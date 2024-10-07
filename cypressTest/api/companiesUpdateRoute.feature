Feature: Atualizar Empresa

  Scenario: Atualizar uma empresa com sucesso
    Given que a API de edição de empresas está disponível
    When eu faço uma requisição PATCH para "/api/company/1/update" com o corpo:
      | name            | cnpj          | cep         | country | state | city        | street_location  | number | district |
      | "Empresa Atualizada" | "12345678000195" | "00000-000" | "Brasil" | "SP"   | "São Paulo" | "Rua Exemplo" | "200"   | "Centro" |
    Then a resposta deve retornar o código de status 200

  Scenario: Atualizar uma empresa com sucesso
    Given que a API de edição de empresas está disponível
    When eu faço uma requisição PATCH para "/api/company/0/update" com o corpo:
      | name            | cnpj          | cep         | country | state | city        | street_location  | number | district |
      | "Empresa Atualizada" | "12345678000195" | "00000-000" | "Brasil" | "SP"   | "São Paulo" | "Rua Exemplo" | "200"   | "Centro" |
    Then a resposta deve retornar o código de status 400
    And deve retornar error:

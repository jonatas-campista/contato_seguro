Feature: Cadastro de Usuários

Scenario: Listar usuários com sucesso
    Given que eu estou na página de listagem de usuários
    Then eu vejo uma lista de usuários cadastrados
    And a lista deve conter as seguintes informações:
      | Nome              | Email                        | Telefone    | Nascimento | Cidade          | Empresas          |
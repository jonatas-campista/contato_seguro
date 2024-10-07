Feature: Cadastro de Usuários

# melhorias a serem realizadas: nao ser possivel digitar caracteres especiais
# nao ser possivel cadastrar mais de 1 user com o mesmo email
  
  Scenario: Criar um novo usuário
    Given que eu estou na página de listar usuarios
    When eu clico no botão "Adicionar Usuário"
    And eu preencho o campo o fomulario
    And eu clico no botão Salvar
    Then eu vejo o novo usuário na lista de usuários

  Scenario: Validar o campo Empresa ao clicar em Salvar
    Given que eu estou na página de listar usuários
    When eu clico no botão "Adicionar Usuário"
    And eu preencho os campos do formulario
    And eu clico no botão "Salvar" sem a empresa
    Then eu valido se apareceu erro para campo empresa

  Scenario: Tentar cadastrar um usuário com caracteres especiais no campo Empresa
  Given que eu estou na página de listar usuários
  When eu clico no botão "Adicionar Usuário"
  And eu preencho os do form com caracteres especiais
  And eu clico no botão "Salvar" com campos preenchidos com caracteres
  Then eu vejo uma mensagem de erro "Os campos não podem conter caracteres especiais"



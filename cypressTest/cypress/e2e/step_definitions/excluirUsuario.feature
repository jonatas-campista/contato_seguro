Feature: Excluir de Usuários

# de acordo com o codigo o cenario de exclusao realiza somente uma exclusao simples
# sendo ela apenas uma alteraçao no campo show de 1 para 0

# melhorias: excluir definitivamente o user  para que ele nao apareça na lista

  Scenario: Excluir um usuário existente
    Given que eu estou na página de listar usuários
    And eu vejo "Maria Oliveira" na lista de usuários
    When eu clico no botão "Excluir" ao lado de "editar"
    Then eu vejo uma mensagem de sucesso "Usuário excluído com sucesso"
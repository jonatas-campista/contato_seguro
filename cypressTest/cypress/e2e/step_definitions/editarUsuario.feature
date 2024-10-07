Feature: Edicao de Usuários

 # o cenario de ediçao aprensenta teste falho devido ao 
 # botao de editar nao levar a nenhuma pagina nem modal 
 # nao sendo possivel prosseguir com o cenario

 # melhorias a serem implementados: pagina ou modal de ediçao,campos obrigatorios e validaçoes se realmente foi editado

  Scenario: Editar um usuário existente
    Given que eu estou na página listar usuarios
    And eu vejo "Maria Oliveira" na lista de usuários
    When eu clico no botao Editar ao lado de Maria Oliveira
     And eu atualizo os campos
    # And eu clico no botão "Salvar"
    # Then eu vejo uma mensagem de sucesso "Usuário atualizado com sucesso"
    # And eu vejo "Maria Das Dores" na lista de usuários


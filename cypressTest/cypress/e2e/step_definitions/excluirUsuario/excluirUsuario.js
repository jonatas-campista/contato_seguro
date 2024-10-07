const { Given, When} = require('cypress-cucumber-preprocessor/steps');

import { 
  verificarUsuarioNaLista,
  clicarBotaoExcluir,
  verificarModalSucesso,
} from '../../../support/userActions';


Given('que eu estou na página de listar usuários', () => {
    cy.visit('http://localhost:5400');
  
  });
When('eu vejo "Maria Oliveira" na lista de usuários', () => {
    verificarUsuarioNaLista();
  });
When('eu clico no botão "Excluir" ao lado de "editar"', () => {
  clicarBotaoExcluir();
  });
Then('eu vejo uma mensagem de sucesso "Usuário excluído com sucesso"', () => {
    verificarModalSucesso('Sucesso!', 'Usuário deletado com sucesso!');
    });



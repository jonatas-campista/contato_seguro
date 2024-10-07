const { Given, When} = require('cypress-cucumber-preprocessor/steps');

import { 

  verificarUsuarioNaLista,
  clicarBotaoEditar,
} from '../../../support/userActions';


Given('que eu estou na página listar usuarios', () => {
  cy.visit('http://localhost:5400');
});

When('eu vejo "Maria Oliveira" na lista de usuários', () => {
    verificarUsuarioNaLista();
    });

When('eu clico no botao Editar ao lado de Maria Oliveira', () => {
    clicarBotaoEditar()
  });



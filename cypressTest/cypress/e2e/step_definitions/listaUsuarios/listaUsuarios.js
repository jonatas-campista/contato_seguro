const { Given, When} = require('cypress-cucumber-preprocessor/steps');

import { 

  verificarListaUsuarios,
  validarInformacoesUsuarios} from '../../../support/userActions';


Given('que eu estou na página de listagem de usuários', () => {
  cy.visit('http://localhost:5400');

});

Then('eu vejo uma lista de usuários cadastrados', () => {
  verificarListaUsuarios();
});

Then('a lista deve conter as seguintes informações:', (dataTable) => {
  validarInformacoesUsuarios(dataTable);
});


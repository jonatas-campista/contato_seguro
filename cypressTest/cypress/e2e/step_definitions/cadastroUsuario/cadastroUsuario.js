const { Given, When,Then} = require('cypress-cucumber-preprocessor/steps');

import { 
  modalAdicionarUsuario,
  verificaTelaCadastroUsuario,
  verificaCamposObrigatorios,
  preencherFormularioUsuario,
  salvarUsuario,
  verificarUsuarioNaLista,
  preencherFormularioSemEmpresa,
  verificarModalCampoEmpresa,
  preencherFormularioCaracteresEspeciais} from '../../../support/userActions';


Given('que eu estou na página de listar usuarios', () => {
  cy.visit('http://localhost:5400');
});

When('eu clico no botão {string}', (botao) => {
  if (botao === 'Adicionar Usuário') {
    modalAdicionarUsuario();
    verificaTelaCadastroUsuario();
  }
});

When('eu preencho o campo o fomulario', () => {
  verificaCamposObrigatorios();
  preencherFormularioUsuario("Maria Oliveira","maria.oliveira@example.com","123456789","Rio de janeiro","2024-05-20","Empresa 1")
  });

When('eu clico no botão Salvar', () => {
  salvarUsuario();
   });

Then('eu vejo o novo usuário na lista de usuários', () => {
  verificarUsuarioNaLista();
  });

Given('que eu estou na página de listar usuários', () => {
    cy.visit('http://localhost:5400'); // Acesse a página de listar usuários
  });
  
When('eu clico no botão {string}', (botao) => {
    if (botao === 'Adicionar Usuário') {
      modalAdicionarUsuario(); // Abre o modal de adicionar usuário
    }
  });
  
When('eu preencho os campos do formulario', () => {
  preencherFormularioSemEmpresa("Carlos Silva","carlos.silva@example.com","987654321","São Paulo","2023-10-04");
  });
  
When('eu clico no botão "Salvar" sem a empresa', () => {
    salvarUsuario();
  });

Then('eu valido se apareceu erro para campo empresa', () => {
    verificarModalCampoEmpresa("Atenção!","Insira as empresas do usuário!");
  });


Given('que eu estou na página de listar usuarios', () => {
    cy.visit('http://localhost:5400');
  });
  
When('eu clico no botão {string}', (botao) => {
    if (botao === 'Adicionar Usuário') {
      modalAdicionarUsuario();
      verificaTelaCadastroUsuario();
    }
  });
  
When('eu preencho os do form com caracteres especiais', () => {
  preencherFormularioUsuario("@#$%&*","@#$%&*","@#$%&*","@#$%&*","2024-05-20","Empresa 1")
  });
  
When('eu clico no botão "Salvar" com campos preenchidos com caracteres', () => {
    salvarUsuario();
  });


  


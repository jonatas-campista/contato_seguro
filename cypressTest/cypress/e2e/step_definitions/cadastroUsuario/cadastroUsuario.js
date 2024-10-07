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
  preencherFormularioUsuario({
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@example.com',
    telefone: '123456789',
    cidadeNascimento: 'Rio de Janeiro',
    dataNascimento: '2024-05-20',
    empresas: 'Empresa 1'
  });
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
    preencherFormularioSemEmpresa({
      nome: 'Carlos Silva',
      email: 'carlos.silva@example.com',
      telefone: '987654321',
      cidadeNascimento: 'São Paulo',
      dataNascimento: '2023-10-04',
    });
  });
  
When('eu clico no botão "Salvar" sem a empresa', () => {
    salvarUsuario(); // Salva as informações do usuário
  });

Then('eu valido se apareceu erro para campo empresa', () => {
    verificarModalCampoEmpresa(); // Salva as informações do usuário
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
  preencherFormularioCaracteresEspeciais();
  });
  
When('eu clico no botão "Salvar" com campos preenchidos com caracteres', () => {
    salvarUsuario();
  });

 // Then('eu clico no botão "Salvar" com campos preenchidos com caracteres', () => {
    
 // });
  


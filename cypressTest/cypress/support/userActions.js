
  

export const verificarListaUsuarios = () => {
    cy.get('table').should('exist'); 
  };
  export const validarInformacoesUsuarios = () => {
    cy.get('th').eq(0).should('have.text', 'Nome');
    cy.get('th').eq(1).should('have.text', 'Email');
    cy.get('th').eq(2).should('have.text', 'Telefone');
    cy.get('th').eq(3).should('have.text', 'Nascimento');
    cy.get('th').eq(4).should('have.text', 'Cidade');
    cy.get('th').eq(5).should('have.text', 'Empresas');
}

  export const modalAdicionarUsuario = () => {
    cy.get('button#new-user svg').click();
  };

  export const verificaTelaCadastroUsuario = () => {
    cy.get('.ReactModal__Content').should('be.visible');
    cy.get('h2').should('have.text', 'Cadastrar novo usuário'); 
  }

  export const verificaCamposObrigatorios = () => {
    cy.get('input[placeholder="Nome"]')
      .should('have.attr', 'required'); 

    cy.get('input[placeholder="Email"]')
      .should('have.attr', 'required'); 

    cy.get('input[placeholder="Telefone"]')
      .should('not.have.attr', 'required'); 

    cy.get('input[placeholder="Data de nascimento"]')
      .should('have.attr', 'required'); 

    cy.get('input[placeholder="Cidade de nascimento"]')
      .should('not.have.attr', 'required');
  }
  

  export const preencherFormularioSemEmpresa = ({
    nome,
    email,
    telefone,
    cidadeNascimento,
    dataNascimento,
    empresas
  }) => {
    if (nome) cy.get('input[placeholder="Nome"]').type(nome);
    if (email) cy.get('input[placeholder="Email"]').type(email);
    if (telefone) cy.get('input[placeholder="Telefone"]').type(telefone);
    if (cidadeNascimento) cy.get('input[placeholder="Cidade de nascimento"]').type(cidadeNascimento);
    if (dataNascimento) cy.get('input[placeholder="Data de nascimento"]').type(dataNascimento);
    if (empresas) cy.get('input[placeholder="Empresas"]').type(empresas);
  }
  

  export const preencherFormularioUsuario = () => {

    
    cy.get('input[placeholder="Nome"]').type('Maria Oliveira');
    cy.get('input[placeholder="Email"]').type('maria.oliveira@example.com');
    cy.get('input[placeholder="Telefone"]').type('123456789');
    cy.get('input[placeholder="Cidade de nascimento"]').type('Rio de janeiro')
    cy.get('input[placeholder="Data de nascimento"]').type('2024-05-20');
    cy.get('input[placeholder="Empresas"]').type('Empresa 1'); 

  cy.get('.optionListContainer').should('be.visible'); 

  cy.get('.optionContainer .option').contains('Empresa 1').click();
  cy.get('.optionContainer .option').contains('Empresa 2').click(); 
  cy.get('.optionContainer .option').contains('Empresa 3').click(); 
  };
  
  export const salvarUsuario = () => {
    cy.get('button[type="submit"]').contains('Salvar').click();
  };

  
  export const verificarMensagemDeSucesso = () => {
    cy.contains('Usuário criado com sucesso').should('be.visible');
  };
  
  export const verificarUsuarioNaLista = () => {
    cy.contains('Maria Oliveira').should('be.visible');
  };

  export const clicarBotaoEditar = () => {
    cy.get('button img[alt="edit"]').first().click();
  };

  export const clicarBotaoExcluir = () => {
    cy.get('button img[alt="delete"]').first().click();
  };


  export const verificarModalSucesso = (tituloEsperado, mensagemEsperada) => {
    cy.get('.swal2-popup').should('be.visible');
  
    cy.get('#swal2-title').should('have.text', tituloEsperado);
    cy.get('#swal2-html-container').should('contain.text', mensagemEsperada);
  
    cy.get('.swal2-confirm').should('be.visible').click();
  }

  export const verificarModalCampoEmpresa = (tituloEsperado, mensagemEsperada) => {

    cy.get('.swal2-title').should('contain.text', 'Atenção!');

    cy.get('.swal2-html-container').should('contain.text', 'Insira as empresas do usuário!');

    cy.get('.swal2-icon.swal2-warning').should('be.visible');

    cy.get('.swal2-confirm').click();

  }

  export const preencherFormularioCaracteresEspeciais = () => {

    
    cy.get('input[placeholder="Nome"]').type('@#$%&*');
    cy.get('input[placeholder="Email"]').type('@#$%&*');
    cy.get('input[placeholder="Telefone"]').type('@#$%&*');
    cy.get('input[placeholder="Cidade de nascimento"]').type('@#$%&*')
    cy.get('input[placeholder="Data de nascimento"]').type('2024-05-20');
    cy.get('input[placeholder="Empresas"]').type('Empresa 1'); 

  cy.get('.optionListContainer').should('be.visible'); 

  cy.get('.optionContainer .option').contains('Empresa 1').click();
  cy.get('.optionContainer .option').contains('Empresa 2').click(); 
  cy.get('.optionContainer .option').contains('Empresa 3').click(); 
  };



  

  

  
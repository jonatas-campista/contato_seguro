
  

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
    cy.get('#new-user').click();
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
  

  export const preencherFormularioSemEmpresa = (nome,email,telefone,cidadeNascimento,dataNascimento,empresas) => {
    cy.get('input[placeholder="Nome"]').type(nome);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Telefone"]').type(telefone);
    cy.get('input[placeholder="Cidade de nascimento"]').type(cidadeNascimento);
    cy.get('input[placeholder="Data de nascimento"]').type(dataNascimento);
    }
  
  export const preencherFormularioUsuario = (nome,email,telefone,cidadeNascimento,dataNascimento,empresas) => {
    cy.get('input[placeholder="Nome"]').type(nome);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Telefone"]').type(telefone);
    cy.get('input[placeholder="Cidade de nascimento"]').type(cidadeNascimento);
    cy.get('input[placeholder="Data de nascimento"]').type(dataNascimento);
    cy.get('input[placeholder="Empresas"]').type(empresas);

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
    cy.contains('Maria Oliveira')
      .parent()
      .find('img[alt="edit"]')
      .click()
  };

  export const clicarBotaoExcluir = () => {
    cy.contains('Maria Oliveira')
      .parent()
      .find('img[alt="delete"]')
      .click()
  };

  export const verificarModalSucesso = (tituloEsperado, mensagemEsperada) => {
    cy.get('.swal2-popup').should('be.visible');
    cy.get('#swal2-title').should('have.text', tituloEsperado);
    cy.get('#swal2-html-container').should('contain.text', mensagemEsperada);
    cy.get('.swal2-confirm').should('be.visible').click();
  }

  export const verificarModalCampoEmpresa = (tituloEsperado, mensagemEsperada) => {

    cy.get('.swal2-title').should('contain.text', tituloEsperado);
    cy.get('.swal2-html-container').should('contain.text', mensagemEsperada);
    cy.get('.swal2-icon.swal2-warning').should('be.visible');
    cy.get('.swal2-confirm').click();

  }

  //export const preencherFormularioCaracteresEspeciais = () => {
   // cy.get('input[placeholder="Nome"]').type('@#$%&*');
    //cy.get('input[placeholder="Email"]').type('@#$%&*');
   // cy.get('input[placeholder="Telefone"]').type('@#$%&*');
    //cy.get('input[placeholder="Cidade de nascimento"]').type('@#$%&*')
   // cy.get('input[placeholder="Data de nascimento"]').type('2024-05-20');
   // cy.get('input[placeholder="Empresas"]').type('Empresa 1'); 

  //cy.get('.optionListContainer').should('be.visible'); 

  //cy.get('.optionContainer .option').contains('Empresa 1').click();
  //cy.get('.optionContainer .option').contains('Empresa 2').click(); 
  //cy.get('.optionContainer .option').contains('Empresa 3').click(); 
 // };



  

  

  
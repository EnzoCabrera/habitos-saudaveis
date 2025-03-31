# Habit Tracker
Este projeto é uma aplicação web do tipo Single-Page Aplication (SPA) desenvolvida utilizando o framework Angular. O projeto foi criado como parte de um projeto acadêmico para a disciplina de Gestão e Qualidade de Software. O objetivo principal é gerenciar usuários, hábitos e registros de hábitos.

## Grupo
- **Scrum Master**:
    - Enzo Nascimento Cabrera - 202320732
- **Front-end**:
    - William Menezes Damascena - 202512580
    - Lucas Alves Pereira - 82411796 
    - Kauan Lacerda e Silva - 202412124
- **Back-end**:
    - Felipe Couto - 823127403 
    - Geziel Oliveira Silva - 202313071
- **Documentação**:
    - Lorhan de Souza Mendes Ferreira - 1262323379
- **QA**:
    - João Vitor Mendes Da Silva - 202411713
    - Mateus Ramos Neres - 824136360

## Tecnologias Utilizadas
- TypeScript
- Angular
- PrimeNg

## Estrutura do Projeto
A estrutura do projeto segue o padrão do Angular com a seguintes pastas:
- **layout**: Contém os arquivos gerados pelo tema do PrimeNg com os componentes (footer, layout, menu, menuitem, sidebar e topbar).
- **view**: Contém os componentes que implementam a lógica de negócio do sistema.
    - **auth**: Contém os componentes, módulos e services referentes à autenticação.
    - **dashboard**: Contém os componentes, módulos e services referentes ao dashboard.

## Funcionalidades Implementadas
### Usuários
- **Cadastro de Usuários**: Formulário para criação de novos usuários.
- **Login de Usuários**: Formulário para login do usuário no sistema.
- **Deleção de usuários**: Permite ao usuário excluir sua conta.

### Hábitos
- **Cadastro de hábitos**: Formulário para criação de um novo hábito.
- **Listagem de hábitos**: Tabela de exibição dos hábitos criados por um usuário.
-- **Deleção de hábitos**: Permite ao usuário exlcuir seu hábito.
-- **Edição de hábitos**: Permite ao usuário editar seu hábito.

## Como Baixar e Executar o Projeto
Para executar o projeto é necessário seguir os seguintes passos:
1. Certifique-se de ter o Angular 17, Java 21 e Node 18.13 ou superiores instalados.
2. Clone o [projeto do back-end](https://github.com/FKouto/Habit-Track-API) e executá-lo. 
3. Clone o projeto front-end.
4. Abra o terminal dentro da pasta do projeto e executar o comando `npm install` para instalar as dependências do Node.
5. Execute o comando `ng serve` para rodar a aplicação;

# ProjetoDanielle
Projeto desenvolvido em [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Clonando o código
1. Clone o código fonte: 
`git clone https://github.com/dgvelloso/projetoDanielle`

2. Instale as dependências. 
`npm install`
OBS: Verifique a versão do node no arquivo package.json .

3. Rode localmente:

 `ng serve` ou `npm start` 
 
 Oba, código rodando! Abra o navegador em `http://localhost:4200/consulta-cpf`. 
 A aplicação irá recompilar automaticamente após qualquer alteração no código.

## Documentação

É necessário rodar `json-server --watch db.json`para ter acesso ao mock server no `http://localhost:3000/funcionarios`e gerar a 'API fake' com dados a serem consultados.

Para consulta de cpf utilize: "11122233344"; "01102203304" ou "12302203304".

## Testes unitários
Os testes unitários são escritos em Jasmine e compilador por [Karma](https://karma-runner.github.io).

Rode `ng test` para executar os testes via [Karma]

## Ajuda
Para obter ajuda, rode `ng help` no seu terminal de comando ou acesse a página [Angular CLI Overview and Command Reference](https://angular.io/cli).

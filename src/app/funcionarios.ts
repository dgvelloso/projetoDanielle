export class Funcionarios {
  cpf: string;
  nome: string;
  situacao: string;
  contaAplicacao: string;
  contaCorrente: string

    constructor(
    cpf: string,
    nome: string,
    situacao: string,
    contaAplicacao: string,
    contaCorrente: string

    ){
      this.cpf = cpf;
      this.nome = nome;
      this.situacao = situacao;
      this.contaAplicacao = contaAplicacao;
      this.contaCorrente = contaCorrente
    }
}

import { Livro } from './livro';

export class Autor {
  nome: String;
  livros: Livro[];

  constructor(nome: String) {
    this.nome = nome;
    this.livros = [];
  }

  adicionarLivro(livro: Livro): void {
    this.livro.push(livro);
  }

  quantidadeDeLivros(): number {
    console.log(`Quantidade de livros: ${this.livros.length}`);
  }
}

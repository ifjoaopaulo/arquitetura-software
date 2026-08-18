import { Livro } from "./livro";

export class Autor {
  nome: String;
  livros: Livro[];

  constructor(nome: String) {
    this.nome = nome;
    this.livros = [];
  }

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  quantidadeDeLivros(): number {
    return this.livros.length;
  }
}

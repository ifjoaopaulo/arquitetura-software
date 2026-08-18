import { Autor } from './autor.ts';

export class Livro {
  titulo: String;
  ano: number;
  autor: Autor;

  constructor(titulo: String, ano: number, autor: Autor) {
    this.titulo = titulo;
    this.ano = ano;
    this.autor = autor;

    autor.adicionarLivro(this);
  }

  descricao(): String {
    return `${this.titulo} (${this.ano), ${this.autor}`;
  }
}

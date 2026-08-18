import { Livro } from "./livro.ts";

export function titulos(livros: Livro[]): String[] {
  let listaTitulos: String[] = [];

  for (let livro of livros) {
    listaTitulos.push(livro.titulo);
  }

  return listaTitulos;
}

export function publicadosDepoisDe(livros: Livro[], ano: number): Livro[] {
  let listaLivros: Livro[] = [];

  for (let livro of livros) {
    if (livro.ano > ano) {
      listaLivros.push(livro);
    } else {
      continue;
    }
  }

  return listaLivros;
}

export function maisAntigo(livros: Livro[]): Livro {
  let maisAntigo: Livro = livros[0];

  for (let livro of livros) {
    if (livro.ano > maisAntigo.ano) {
      maisAntigo = livro;
    } else {
      continue;
    }
  }

  return maisAntigo;
}

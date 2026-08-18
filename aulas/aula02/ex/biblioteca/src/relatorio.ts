import { Livro } from './livro.ts';

export function titulos(livros: Livro[]): String[] {
  listaTitulos: String = [];
  
  for livro of livros {
    listaTitulos.push(livro.titulo);
  }
}

  return listaTitulos[];
}

export function publicadosDepoisDe(livros: Livro[], ano: number): Livro[] {
  listaLivros: Livro = [];
  
  for livro of livros {
    if(livro.ano > ano) {
      listaLivros.push(this);
    } else {
    continue;
    }
  }

  return listaLivros[];
}

export function maisAntigo(livros: Livro[]): Livro {
  maisAntigo: Livro = livros[0];

  for livro of livros {
    if(livro.ano > maisAntigo.ano) {
      maisAntigo = livro;
    } else {
      continue;
    }
  }

  return maisAntigo;
}

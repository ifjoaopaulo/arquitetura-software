import { Autor } from './autor.ts';
import { Livro } from './livro.ts';
import { titulos, publicadoDepoisDe, maisAntigo } from './relatorio.ts';

const machado = new Autor('Machado de Assis');
const orwell = new Autor('George Orwell');

const acervo: Livro[] = [];
acervo.push(new Livro('Dom Casmurro', 1899, machado));
acervo.push(new Livro('Memórias Póstumas de Brás Cubas', 1881, machado));
acervo.push(new Livro('1984', 1949, orwell));
acervo.push(new Livro('A Revolução dos Bichos', 1945, orwell));

// Passo 4 - Do livro para o autor
for livro of acervo {
  livro.descricao();
}

// Passo 4 - Do autor para os livros
// Para Machado
console.log(`${machado.nome} escreveu ${machado.quantidadeDeLivros()}`);

for livro of machado.livros {
  console.log(`${livro.titulo} (${livro.ano}), ${livro.autor}`);
}

// Para Orwell
console.log(`${orwell.nome} escreveu ${orwell.quantidadeDeLivros()}`);

for livro of orwell.livros {
  console.log(`${this.titulo} (${this.ano}), ${this.autor}`);
}

// Passo 4 - Usando as funções

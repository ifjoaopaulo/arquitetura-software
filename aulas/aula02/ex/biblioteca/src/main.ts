import { Autor } from "./autor.ts";
import { Livro } from "./livro.ts";
import { titulos, publicadosDepoisDe, maisAntigo } from "./relatorio.ts";

const machado = new Autor("Machado de Assis");
const orwell = new Autor("George Orwell");

const acervo: Livro[] = [];
acervo.push(new Livro("Dom Casmurro", 1899, machado));
acervo.push(new Livro("Memórias Póstumas de Brás Cubas", 1881, machado));
acervo.push(new Livro("1984", 1949, orwell));
acervo.push(new Livro("A Revolução dos Bichos", 1945, orwell));

// Passo 4 - Do livro para o autor
for (let livro of acervo) {
  livro.descricao();
}

console.log("---");

// Passo 4 - Do autor para os livros
// Para Machado
console.log(`${machado.nome} escreveu ${machado.quantidadeDeLivros()} livros.`);

for (let livro of machado.livros) {
  console.log(`${livro.titulo} (${livro.ano}), ${livro.autor.nome}`);
}

console.log("---");

// Para Orwell
console.log(`${orwell.nome} escreveu ${orwell.quantidadeDeLivros()} livros.`);

for (let livro of orwell.livros) {
  console.log(`${livro.titulo} (${livro.ano}), ${livro.autor.nome}`);
}

console.log("---");

// Passo 4 - Usando as funções
console.log("Títulos dos livros em nosso acervo:");
for (let titulo of titulos(acervo)) {
  console.log(titulo);
}

console.log("---");
console.log("Livros publicados depois de 1900:");
for (let livro of publicadosDepoisDe(acervo, 1900)) {
  console.log(`${livro.titulo} (${livro.ano}), ${livro.autor.nome}`);
}

console.log("---");
let livroMaisAntigo: Livro = maisAntigo(acervo);
console.log(`Livro mais antigo: ${livroMaisAntigo.descricao()}`);

console.log("---");

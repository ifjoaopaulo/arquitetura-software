# Análise de características arquiteturais
## Domínio x Características
**Domínio *do problema***
**O QUE** o sistema faz. (Requisitos funcionais, comportamento, regras de negócio)

**Características arquiteturais**
**COMO** o sistema é construído. (capacidades e critérios operacionais)
### As duas atividades do design estrutural
1. Análise de características arquiteturais
2. Design de componentes lógicos
### Termologia
Características arquiteturais são, essencialmente, a mesma coisa que "requisitos não-funcionais". O nome foi mudado por conta do caráter "auto-depreciativo" do termo antigo.
## 3 critérios
Para ser arquitetural, a característica precisa:
- Especificar uma consideração de design **não relacionada ao domínio**.
	- Descreve como o sistema opera, e não o que ele faz.
	- Independe das funcionalidades.
	- Atravessa o sistema inteiro, ao invés de morar num caso de uso.
- **Influenciar** algum aspecto estrutural do design.
	- Segurança pode ser resolvida via design (criptografia, hashihg de senha, higiene de código). Num monolito, muitas vezes não existe estrutura especial. **NÃO É ARQUITETURAL**
		- PORÉM, a segurança depende do caso: quanto mais crítico, maior a chance de precisar de uma estrutura mais definida.
	- Escalabilidade não pode ser resolvida por design. O melhor design do mundo não pode escalar um monolito infinitamente. Em algum ponto, exige uma mudança estrutural. **É ARQUITETURAL**
- Ser **cŕitica ou importante** para o sucesso da aplicação.
	- Um sisteNOTEma pode suportar um número enorme de características.
		- Suportar *todas* é impossível, e tentar é um erro comum.
	- Portanto o critério exige **priorização**: o que é critíco, e não o que seria bom ter.
## Características explícitas x implícitas
**Explícitas** aparecem no documentos de requisitos. Alguém escreveu:
	"O sistema deve suportar 5.000 usuários simultâneos"

**Implícitas** ninguém especificou, mas o sistema fracassa sem elas:
	Ninguém escreve "o sistema não pode cair", mas *se* cair, o sistema falhou.
## Catálogo em quatro categorias
As características vão de detalhes de código a preocupações operacionais sofisticadas.

Quatro categorias podem resumir a mioria dos arquitetos:
1. Operacionais
2. Estruturais
3. De nuvem
4. (não tava prestando atenção kkkkkkkk)
## A arquitetura menos pior
> "Nunca busque a melhor arquitetura; busque a arquitetura **menos pior.**"


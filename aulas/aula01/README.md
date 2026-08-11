# O que é Arquitetura de Software?
## Evolução

XP (1990) -> Cloud (2005(?)) -> DevOps (2009) -> Entrega Contínua (2010) -> Containers (???) -> Microsserviços

**Estratégia antiga**: Acertar de primeira.
*Mudar é caro, então decida certo no início e não mexa mais*

**Estratégia nova**: Baratear a mudança.
*Mudar é caro, mas você pode projetar para que fique mais barata* <- A mudança vira **requisito**

## Trade-off

Conceito central da disciplina.

*"Não há respostas erradas em arquitetura, apenas **caras**"* -Mark Richards

## Arquitetura x Design

Arquitetura: Estrutura X Design: Aparência

Design tende a ser algo mais fácil de se mudar mais a frente, se refere em geral a coisas simples. (ex.: Organização do código)
Arquitetura é mais díficil de mudar, e se relaciona diretamente ao funcionamento do programa. (ex.: Microssistemas)

Em geral, é importante entender: Arquitetura e Design não são conceitos *binários*, é mais similar a um *espectro*.
## As 4 dimensões da arquitetura
### 1ª Dimensão: Características Arquiteturais
São características que guiam a direção do seu projeto

Variam de projeto para projeto. Alguns programas não precisam de performance excepcional (ex.: análise de logs), enquanto alguns precisam (ex.: High-frequency trading). E isso vale para todas as outras características.
### 2ª Dimensão: Decisões Arquiteturais
Decisões tomadas durante o projeto do software, geralmente tendo impacto de longo prazo. Seu principal objetivo é alinhar a estrutura do sistema às prioridades.

Decisões viram **restrições**. (ex.: A UI não pode acessar o banco diretamente, deve passar por serviços)

Em sistemas grandes, existem dezenas de decisões documentadas (ADRs).
### 3ª Dimensão: Componentes Lógicos
As características definem as **capacidades** do sistema. Os componentes lógicos definem seu **comportamento**.

São blocos funcionais que executam funções coesas (ex.: processar pagamentos; gerir estoque). Cada componente tem um papel e fronteira bem definidos (o que faz e o que não faz).

Geralmente estes componentes são organizados em pastas, namespaces, bibliotecas, entre outros.
### 4ª Dimensão: Estilo Arquitetural
O estilo vem *depois* da análise. É fundamental definir primeiro as caraceterísticas e componentes lógicos antes de pensar no estilo.

É a forma e estrutura global. O "formato" do sistema, suas capacidades e limitações (topologia, complexidade, custo).

**Mudar o estilo é caro.**

Exemplos:
- **Microservices**: alta escalabilidade e agilidade.
- **Monolítico**: menor complexidade e custo.
- **Event-driven**: muito escalável, rápido e responsivo.

## Registro de decisões: ADR
Qualquer decisão tomada que não é documentada vira, meses depois, "Por que isso está assim?"

*Architecture Decision Record* é um arquivo curto, versionado junto do código, que registra uma decisão e (mais importante) por que ela foi tomada.

%% Aula do dia 10/08/2026 %%
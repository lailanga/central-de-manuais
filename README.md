# Central de Manuais

Manuais de usuário dos sistemas usados pela equipe, publicados como site estático via GitHub Pages.

## Estrutura

```
.
├── index.html                  # página inicial com a lista de manuais
├── assets/
│   ├── style.css               # estilo compartilhado por todas as páginas
│   ├── app.js                  # tema claro/escuro + busca do índice
│   └── img/                    # prints de tela (crie a pasta quando precisar)
├── manuais/
│   └── conecta-solicitar-contrato.html
└── _modelo/
    └── manual-modelo.html      # ponto de partida para um manual novo
```

O `_modelo/` não aparece no site — é só referência para copiar.

## Publicar no GitHub Pages

1. Crie o repositório (público ou privado — Pages em repositório privado exige plano pago).
2. Suba estes arquivos na raiz do repositório, na branch `main`.
3. No GitHub, vá em **Settings → Pages**.
4. Em *Source*, escolha **Deploy from a branch**; em *Branch*, `main` e pasta `/ (root)`. Salve.
5. Em um ou dois minutos o site fica no ar em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

Sem `index.html` na raiz o Pages não mostra a página inicial, então não mova esse arquivo.

## Adicionar um manual novo

1. Copie `_modelo/manual-modelo.html` para `manuais/` com um nome descritivo em minúsculas e hífens.
   Padrão sugerido: `sistema-nome-do-processo.html` (ex.: `conecta-solicitar-diaria.html`).
2. Escreva o conteúdo usando os blocos prontos (ver tabela abaixo).
3. Abra o `index.html` e adicione um card apontando para o arquivo novo:

```html
<a class="manual" href="manuais/arquivo-do-manual.html" data-tags="palavras para a busca">
  <h3>Título do manual</h3>
  <p>Uma linha explicando o que ele cobre.</p>
  <div class="meta"><span class="badge">Publicado</span></div>
</a>
```

Se for um sistema novo, copie o bloco `<section data-sistema="...">` comentado dentro do `index.html`.

## Blocos de conteúdo disponíveis

| Classe | Para que serve |
|---|---|
| `card` | caixa neutra com lista ou texto |
| `step` | etapa numerada, com selo de setor responsável (`num` + `who`) |
| `note` | observação (azul) |
| `alert` | atenção / risco (laranja) |
| `tip` | boa prática (verde) |
| `toc` | sumário com âncoras |
| `scroll` + `table` | tabela que rola no celular |
| `fig` + `img` | print de tela com legenda |
| `badge` / `badge rascunho` | status do manual no índice |

Nada de framework: só HTML, um CSS e um JS. Dá pra editar direto pela interface do GitHub.

## Prints de tela

Coloque as imagens em `assets/img/` e referencie com `../assets/img/arquivo.png`.
Prefira PNG recortado só na área útil da tela e apague dados sensíveis (nomes, números de processo reais) antes de subir.

## Imprimir em PDF

Qualquer manual pode ser salvo em PDF pelo navegador (Ctrl+P → Salvar como PDF).
O CSS já esconde a barra do topo e a busca na impressão.

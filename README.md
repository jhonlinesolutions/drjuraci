# Site — Dr. Juraci Rosa de Oliveira (Ortopedista)

Site institucional estático, reconstruído a partir do backup exportado da hospedagem anterior (drjuraci.com.br). Sem build, sem dependências de servidor — HTML, CSS e JS puros, prontos para deploy na Vercel.

## Estrutura

```
index.html                                 Home
tratamentos.html                           Listagem de patologias/tratamentos
osteoartrose-ou-osteoartrite.html          Artigo completo
artrite-do-joelho.html                     Artigo
condropatia-patelar.html                   Artigo
rompimento-ligamento-cruzado-anterior.html Artigo
tendinite-patelar.html                     Artigo
convenios.html                             Lista de convênios com busca
covid-19.html                              Medidas de segurança
contato.html                               Contato + mapa
404.html                                   Página de erro

assets/
  css/style.css     Estilos (paleta e layout extraídos do site original)
  js/main.js        Menu mobile + busca de convênios
  img/               Imagens (renomeadas, otimizadas para web)
  video/             Vídeos de fundo (hero e telemedicina)
  docs/              Currículo em PDF
```

## Rodando localmente

Qualquer servidor estático serve. Exemplo:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Deploy na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com → **Add New Project** → importe o repositório.
3. Framework preset: **Other** (site estático puro). Não é necessário build command nem output directory — a Vercel serve os arquivos da raiz automaticamente.
4. Deploy. Depois, em **Settings → Domains**, aponte o domínio `drjuraci.com.br` (e configure o DNS no registrador para apontar para a Vercel).

## Decisões tomadas na reconstrução

- **Conteúdo incluído**: apenas as páginas que estavam no menu ativo do site original, confirmado pelos PDFs de impressão fornecidos (Home, Quem Sou, Tratamentos, Telemedicina, Convênios, Contato, Notícias, Covid-19).
- **Páginas descartadas**: "Atuação", "Nossa Equipe" e "Pagina antiga tratamento" existiam nos arquivos exportados mas continham texto genérico de template (não específico do Dr. Juraci) e não apareciam no menu do site ao vivo — foram tratadas como conteúdo legado e não incluídas.
- **"Notícias" e "Tratamentos"**: no site original os dois itens de menu apontavam para o mesmo conjunto de 5 conteúdos (confirmado comparando os arquivos de "Notícias e Publicações" com a página "Tratamentos"). Por isso ambos os links do menu apontam para `tratamentos.html`.
- **Logo**: não havia um arquivo de logo isolado no material exportado (os PDFs de impressão são capturas de tela, não vetor). O ícone foi redesenhado como SVG a partir da referência visual, e o nome do escritório foi recriado como texto (não imagem), o que facilita edição futura e é melhor para SEO.
- **Página "Contato"**: não havia arquivo de conteúdo específico para essa página no material exportado. Foi montada com os dados de contato que aparecem no rodapé de todas as páginas (telefone, WhatsApp, e-mail, endereço, horário) e um mapa incorporado.
- **Rodapé**: removida a menção "Criado por Aplanex.com" (agência da hospedagem anterior), já que este é um projeto novo.

## Pendências / o que falta decidir com o cliente

- **Botão "Agendamentos"**: aponta para o WhatsApp por padrão. Se o Dr. Juraci usa algum sistema de agendamento online, o link pode ser trocado facilmente em todas as páginas (`assets/js` não controla isso — é um `href` direto em cada HTML).
- **Vídeos de fundo**: os dois `.mp4` do material original foram mantidos (`assets/video/hero.mp4` e `assets/video/telemedicina.mp4`), mas pesam ~8MB juntos. Vale considerar comprimir ou trocar por versões mais leves para melhorar o tempo de carregamento em conexões móveis.
- **Domínio**: o site está pronto para deploy, mas o apontamento do domínio `drjuraci.com.br` para a Vercel precisa ser feito no painel do registrador do domínio.

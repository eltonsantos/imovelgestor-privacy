# Imóvel Gestor – Documentos Legais

Páginas estáticas com documentos legais do Imóvel Gestor, hospedadas em GitHub Pages:

- `index.html` – Política de Privacidade
- `terms.html` – Termos de Uso
- `lgpd.html` – Central LGPD
- `cookies.html` – Política de Cookies
- `style.css` – Estilo compartilhado

URL pública: <https://eltonsantos.github.io/imovelgestor-privacy/>

## Como publicar no GitHub Pages
1. Commit dos arquivos na raiz do repositório.
2. *Settings → Pages*:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (`/root`)
3. URL: `https://<seu-usuario>.github.io/imovelgestor-privacy/`.

## Como publicar no Netlify (arrastar e soltar)
1. <https://app.netlify.com> → **Add new site → Deploy manually**.
2. Arraste a pasta ou conecte o repositório.

## Dados rápidos
- Última atualização: 02/05/2026
- Responsável (controlador): Elton Santos
- Localização: Fortaleza/CE, Brasil
- Contato: elton.melo.santos@gmail.com

## Observações

- Conteúdo idêntico ao painel web (Next.js) em `/legal/*`. Manter sincronizado em alterações.
- Mobile (`imovelgestor-mobile`) aponta para esta URL via `LEGAL_BASE_URL` em `lib/constants.ts`.
- Sem build step. HTML/CSS puro.

# ART Iveta Círová

Jedná se o blog s názvem Nejen o akvarelu. Je to vícestránkový web. Je responzivní - má mobilní, tabletovou a PC verzi.

## Technologie

- generátor statických webů Eleventy
- SASS
- BEM 
- kolekce

Web je publikován přes hostingovou službu Netlify. Využívá také redakční systém pro vkládání aktualit Netlify CMS.

## Zprovoznění na lokálním PC

1. npm install
2. npm run serve

Web se otevře na adrese http://localhost:8080

## Práce se styly

- `npm run css` jednorázově zkompiluje `scss/main.scss` do `css/main.css`
- `npm run css:watch` sleduje změny ve SCSS a průběžně generuje CSS
- `npm run build` před vygenerováním Eleventy webu automaticky spustí kompilaci CSS

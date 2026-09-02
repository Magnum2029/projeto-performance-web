# Projeto de Performance Web

Exercício prático de análise e otimização de performance realizado sobre uma cópia independente do meu portfólio profissional. O projeto foi desenvolvido com React, TypeScript e Vite.

## Objetivo

Identificar gargalos com o Lighthouse, aplicar otimizações mensuráveis e comparar os resultados antes e depois das alterações.

## Tecnologias

- React
- TypeScript
- Vite
- CSS
- React Router
- Lighthouse

## Análise inicial

A primeira análise foi realizada no modo Mobile do Lighthouse, antes das otimizações.

| Categoria | Antes | Depois |
|---|---:|---:|
| Performance | 100 | A preencher após a reanálise |
| Acessibilidade | 87 | A preencher após a reanálise |
| Boas Práticas | 100 | A preencher após a reanálise |
| SEO | 91 | A preencher após a reanálise |

![Relatório Lighthouse antes das otimizações](./relatorios/lighthouse-antes.png)

## Gargalos identificados

- Imagens em PNG e JPEG maiores do que o necessário.
- Imagem de perfil com 1152 × 1536 pixels e aproximadamente 508 KB.
- Miniaturas dos certificados somando aproximadamente 1 MB.
- Imagens sem dimensões explícitas, favorecendo mudanças de layout.
- Imagens fora da primeira tela sem carregamento adiado.
- Todas as páginas incluídas no pacote JavaScript inicial.
- Links com ícones sem nomes acessíveis.
- HTML com parágrafos aninhados incorretamente.
- Ausência de descrição da página e idioma configurado incorretamente.
- Componentes, estilos e imagens antigas sem utilização.

## Melhorias aplicadas

- Conversão das imagens de PNG/JPEG para WebP.
- Redimensionamento das imagens para as dimensões realmente necessárias.
- Redução dos recursos de imagem otimizados de aproximadamente 1,75 MB para 224 KB.
- Uso de `loading="lazy"` nas imagens de projetos, certificados e conteúdo secundário.
- Uso de `decoding="async"`, `width` e `height` para melhorar estabilidade visual.
- Priorização da imagem principal com `fetchPriority="high"`.
- Divisão do código por rota com `React.lazy` e `Suspense`.
- Minificação automática de HTML, CSS e JavaScript durante o build de produção do Vite.
- Remoção de componentes, estilos e imagens não utilizados.
- Correção da estrutura semântica do HTML.
- Inclusão de nomes acessíveis nos links com ícones.
- Inclusão de descrição, idioma e cor de tema nos metadados.
- Correção dos links internos para o caminho do GitHub Pages.

## Impacto das melhorias

A maior redução ocorreu nas imagens. A conversão para WebP e o redimensionamento diminuíram em cerca de 87% o peso dos recursos visuais otimizados. O carregamento adiado evita transferir imagens que ainda não estão visíveis. A divisão do JavaScript por rota também reduz o código necessário na primeira visita.

## Relatório final

O print e os valores finais serão adicionados após uma nova análise com as mesmas configurações do Lighthouse.

## Como executar

```bash
npm ci
npm run dev
```

Para gerar os arquivos minificados de produção:

```bash
npm run build
```

## Autor

**Magnum de Oliveira Santos**

- [GitHub](https://github.com/Magnum2029)
- [LinkedIn](https://linkedin.com/in/magnum-de-oliveira-santos-b138041a1)

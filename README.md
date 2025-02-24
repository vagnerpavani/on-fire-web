# On fire web app

- Esse projeto tem o proposito de cadastrar e exibir os streaks de leituras de newsletters do the news.

## Rodando o projeto em desenvolvimento

Crie um arquivo .env.local com as seguintes informações:

```
VITE_MAIN_API_URL=<URL DA API>
VITE_BEEHIV_API_URL=https://backend.testeswaffle.org/
```

```
npm install
npm run dev
```

# Organização do projeto

## Componentes

- Componentes globais estão diretamente na pasta src/components e também estão divididos em basic, structure e section. (E icons)

- Basic: Componentes mais simples que não dependem de nenhum outro componente. Devem ter o menor escopo possível e só devem depender de outro componente se for para servir como Wrapper.

- Structure: Componentes intermediarios que usam componentes básicos e html para formar um componente com um propósito mais estabelecido. Ex: Uma lista de usuarios, um conjunto que forma um gráfico, etc.

- Sections: São os componentes com maior contexto e que consomem os componentes basicos e de estrutura para formar as seções da página. Só devem ser consumidos por componentes página.

- Pages: Componentes mais alto da arvore, que consome os outros tipos de componentes para formar a página.

- Services: Servem para encapsular lógicas que não serão hooks mas serão usadas em outros lugares.

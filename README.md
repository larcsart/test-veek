# Teste Veek

## Features

- Uses [yarn](https://yarnpkg.com)
- Server-side rendering with [Nextjs](https://nextjs.org/)
- UI components isolate with [Storybook](https://storybook.js.org/)
- Store management with [Redux](https://redux.js.org/)
- Components generate with [generate-react-cli](https://github.com/arminbro/generate-react-cli)
- Consistent coding styles with [editorconfig](http://editorconfig.org)
- Style with [Postcss](https://postcss.org/)
- Linting js with [eslint](http://eslint.org)
- Linting css with [stylelint](https://github.com/stylelint/stylelint)
- Tests with [Testing-Library](https://testing-library.com/) and [jest](https://jestjs.io/)
- Code coverage with [istanbul](https://istanbul.js.org)

## Requirements

- [Node v12+](https://nodejs.org/en/download/current/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started



#### Install dependencies:

```bash
yarn
```

#### Set environment variables:

```bash
cp .env.sample .env
```

## Running Locally

```bash
yarn dev
```

## Running in Production

```bash
yarn start
```

## Building for Production

```bash
yarn build
```

## Creating components

```bash
# create atom
yarn create-atom <ComponentName>

# create molecule
yarn create-molecule <ComponentName>

# create organism
yarn create-organism <ComponentName>

# create template
yarn create-template <ComponentName>
```

## Lint

```bash
# lint js code and fix
yarn lint:js

# lint css code and fix
yarn lint:css
```

## Test

```bash
# run all tests with jest
yarn test

# run all tests and watch for changes
yarn test:watch

# test coverage reports
yarn test:coverage
```

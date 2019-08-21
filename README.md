# stackbee-app

An electron app based on the UBER AWESOME work of: https://webpack.electron.build/

Supports:

- GraphQL/Apollo, integrated server with graphql-transport-electron
- Typescript
- Latest React with Hooks and full HMR
- Fully configurable webpack
- Awesome dotenv and nice setup to handle it in "main" and "renderer"
- CSS Modules & PostCSS

# install dependencies

yarn

````

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
````

### BIG HELP

-> "Invariant Violation: invalid hook call"
--> white-list modules ;)
https://github.com/electron-userland/electron-webpack/issues/314

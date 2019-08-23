# electron-start

An electron boilerplate based on the UBER AWESOME work of: https://webpack.electron.build/

Supports:

- GraphQL/Apollo, integrated server with graphql-transport-electron
- Typescript
- React with Hooks and full HMR
- CSS Modules & PostCSS
- sqlite3 & electron-builder (IT WORKS!)
- I18n with react-intl and poedit

TODO:

- Aliases, especially for postcss

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

# i18n

Have a new `<FormattedMessage>` or `defineMessage` and want to translate it?

```bash
# to extract the latest keys from source and update the `i18n/translations/messages.pot` file
yarn i18n:pot
```

Open up poedit and open the existing `de.po` (the lang you want), and execute `Catalog -> Update from POT file`

Want to add a new language?

1. Open poedit, open the existing `messages.pot` file and on the bottom select `Add new translation`, select the langauge
2. Save the new file under `i18n/translations/<lang-id>.po`

```bash
# to update the `src/common/messages.json` file which is used in the runtime
yarn i18n:json
```

### BIG HELP

-> "Invariant Violation: invalid hook call"
--> white-list modules ;)
https://github.com/electron-userland/electron-webpack/issues/314

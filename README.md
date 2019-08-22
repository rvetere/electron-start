# electron-start

An electron boilerplate based on the UBER AWESOME work of: https://webpack.electron.build/

Supports:

- GraphQL/Apollo, integrated server with graphql-transport-electron
- Typescript
- Latest React with Hooks and full HMR
- Fully configurable webpack
- Awesome dotenv and nice setup to handle it in "main" and "renderer"
- CSS Modules & PostCSS

TODO:

- sqlite3 integration (electron-builder?)
- Translations plugin
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
-> Run `yarn i18n:pot` to extract the latest keys from source and update the `i18n/translations/messages.pot` file
-> Open up poedit and open the existing `de.pot` (the lang you want), and execute `Catalog -> Update from POT file`
-> Now the new key is there to translate :)

Want to add a new language?
-> Open poedit, open the existing `messages.pot` file and on the bottom select `Add new translation`, select the langauge
-> Save the new file under `i18n/translations/<lang-id>.po`

Finally run `yarn i18n:json` to update the `src/common/messages.json` file which is used in the runtime

### BIG HELP

-> "Invariant Violation: invalid hook call"
--> white-list modules ;)
https://github.com/electron-userland/electron-webpack/issues/314

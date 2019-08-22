import { hot } from 'react-hot-loader/root'

import React, { useState, useEffect } from 'react'
import { client } from './graphql/initApollo'
import { ApolloProvider } from '@apollo/react-hooks'
import { IntlProvider } from 'react-intl'
import messages from '../../common/messages.json'
import { Home } from './home'

const messagesTyped: any = messages

const App = () => {
  const [lang, setLang] = useState<string>('de')

  useEffect(() => {
    //@ts-ignore
    window.setLang = setLang
  }, [])

  const msgs = messagesTyped[lang] || {}
  return (
    <ApolloProvider client={client}>
      <IntlProvider locale={lang} messages={msgs} key={lang}>
        <Home />
      </IntlProvider>
    </ApolloProvider>
  )
}

export default hot(App)

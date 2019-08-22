import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styles from './home.css'
import { FormattedMessage } from 'react-intl'

export const Home = () => {
  const { loading, error, data } = useQuery(gql`
    {
      projects {
        id
        name
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log({ data })

  return (
    <div className={styles.home}>
      <FormattedMessage
        id="app.greeting"
        description="Greeting to welcome the user to the app"
        defaultMessage="Hello, {name}!"
        values={{
          name: 'Brudi'
        }}
      />
    </div>
  )
}

import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import styles from './home.css'

export const Home = () => {
  const { loading, error, data } = useQuery(gql`
    {
      hello
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <div className={styles.home}>{data.hello}</div>
}

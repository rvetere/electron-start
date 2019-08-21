import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const Home = () => {
  const { loading, error, data } = useQuery(gql`
    {
      hello
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{data.hello}</div>;
};

import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import MainPage from "../containers/MainPage"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  const client = new ApolloClient({
    uri: "https://task-alejandro.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

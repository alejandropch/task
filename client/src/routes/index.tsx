import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import { client } from "../graphql/client.graphql"

import MainPage from "../containers/MainPage"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
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

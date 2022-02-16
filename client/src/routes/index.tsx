import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../containers/MainPage"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

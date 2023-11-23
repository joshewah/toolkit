import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Landing from "./components/Landing"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

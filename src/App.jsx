import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Landing from "./pages/Landing"
import Tools from "./pages/Tools"
import Support from "./pages/Support"
import About from "./pages/About"
import Suggest from "./pages/Suggest"
import Privacy from "./pages/Privacy"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="tools" element={<Tools />} />
            <Route path="support" element={<Support />} />
            <Route path="about" element={<About />} />
            <Route path="suggest" element={<Suggest />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

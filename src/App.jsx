import './index.css'
import { Routes, Route } from 'react-router-dom'

// non-page components
import Header from "./components/Header"
import Nav from "./components/Nav"

// page components
import About from "./pages/About"
import Home from "./pages/Home"
import NasaList from "./pages/NasaList"

// npm i react-router-dom

function App() {


  return (
    <>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nasalist" element={<NasaList />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

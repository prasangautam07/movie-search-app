import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Favourite from "./pages/Favourite"
import Navbar from "./components/Navbar"
import { MovieProvider } from "./context/MovieContext"
function App() {

  return (
    <>
      <MovieProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favourite" element={<Favourite/>}></Route>
        </Routes>
      </MovieProvider>
    </>
  )
}

export default App

import { Routes, Route, Link } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Infopage } from "./pages/Infopage"
import "./css/App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Info" element={<Infopage />} />
        <Route path="/*" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
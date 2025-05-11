import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Header from "./Header"
import Isssue from "./pages/Issue"
import New from "./pages/CreateIssuse"
import Projects from "./pages/Projects"
import Pulls from "./pages/PullRequest"
import Code from "./pages/Code"
import Sercurity from "./pages/Sercurity"
import Actions from "./pages/Actions"

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Isssue />} />
        <Route path="/issue" element={<Isssue />} />
        <Route path="/new" element={<New />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pulls" element={<Pulls />} />
        <Route path="/code" element={<Code />} />
        <Route path="/security" element={<Sercurity />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </>
  )
}

export default App

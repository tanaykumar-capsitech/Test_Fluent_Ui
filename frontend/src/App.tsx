import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./Pages/Dashboard"
import { SideNaveBar } from "./Components/SideNavbar"
import { Project } from "./Pages/Project"

function App() {

  return (
    <>
      <div className="flex gap-5 p-3">
        <SideNaveBar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

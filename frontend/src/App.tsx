import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./Pages/Dashboard"
import { SideNaveBar } from "./Components/SideNavbar"
import { Task } from "./Pages/Task"

function App() {

  return (
    <>
      <div className="flex gap-5 p-3">
        <SideNaveBar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/task" element={<Task />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

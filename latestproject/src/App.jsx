import Login from "./components/Login"
import Register from "./components/Register"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";


function App() {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/cart" element={<h1>Cart</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </Router>

    </>
  )
}

export default App

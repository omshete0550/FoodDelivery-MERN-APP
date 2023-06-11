import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreateUser from "./Pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from "./components/ContextReducer";
import MyOrders from "./Pages/MyOrders";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<CreateUser />} />
            {/* <Route exact path="/MyOrders" element={<MyOrders />} /> */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

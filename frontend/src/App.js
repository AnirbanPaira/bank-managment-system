import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCustomerList from "./pages/AllCustomerList";
import TransferMoney from "./pages/TransferMoney";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<AllCustomerList />} />
        <Route path="/customer/:id" element={<TransferMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

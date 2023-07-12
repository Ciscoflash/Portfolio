import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HmsProvider from "./Context/HmsContext";
function App() {
  return (
    <HmsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HmsProvider>
  );
}

export default App;

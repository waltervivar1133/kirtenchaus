import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import Canino from "./pages/Canino";
import Terapia from "./pages/Terapia";
import Etologia from "./pages/Etologia";


function App() {
 
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/canino" element={<Canino />} />
        <Route path="/terapia" element={<Terapia />} />
        <Route path="/etologia" element={<Etologia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

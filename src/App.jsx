import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header.jsx";
import AddFlower from "./pages/AddFlower.jsx";
import DeleteFlower from "./pages/DeleteFlower.jsx";
import GetAll from "./pages/GetAll.jsx";
import GetFlower from "./pages/GetFlower.jsx";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header />}>
      <Route path="add-flower" element={<AddFlower />}></Route>
      <Route path="delete-flower" element={<DeleteFlower />}></Route>
      <Route path="get-all" element={<GetAll />}></Route>
      <Route path="get-flower" element={<GetFlower />}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

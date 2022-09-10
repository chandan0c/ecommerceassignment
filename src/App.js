import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ProductCreation } from "./components/ProductCreation";
import { ProductDetails } from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
          <Route exact path="/product" element={<Homepage />} />
          <Route exact path="/product/create" element={<ProductCreation />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

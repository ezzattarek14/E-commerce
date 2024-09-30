import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./Components/Applayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

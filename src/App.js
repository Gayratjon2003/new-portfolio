import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/style/global.scss'
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MarkDown from "./pages/Blog/Blogs"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/markdown/:id/:itemId' element={<MarkDown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

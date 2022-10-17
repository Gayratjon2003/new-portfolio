import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/style/global.scss'
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MarkDown from "./pages/Blog/Blogs";

function App() {
  return (
    <BrowserRouter basename="/new-portfolio">
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/contact' element={<Contact />} ></Route>
        {/* <Route path='/markdown/:id/:itemId' element={<MarkDown />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

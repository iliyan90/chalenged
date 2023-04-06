import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Works from './pages/Works'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Footer from "./components/Footer";
import WorkDetail from "./pages/WorkDetail";
function App() {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection:'column',
        maxWidth: '1152px',
        margin:'0 auto',
        backgroundColor: 'var(--light)',
        overflowX:'hidden'
      }}
    >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/works/:id" element={<WorkDetail/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

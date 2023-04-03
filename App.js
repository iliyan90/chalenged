import { Route, Routes } from "react-router-dom";
import "./App.css";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import JobPage from "./pages/JobPage";
import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
      <Brand />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/job/:id" element={<JobPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

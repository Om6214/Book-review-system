import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import "./App.css";
import Navbar from "./Components/Navbar";
import Collection from "./Pages/Collection";
import Review from "./Pages/Review";
import Contact from "./Pages/Contact";
import Logout from "./Pages/Logout";
import Inside from "./Pages/Inside";
import Error from "./Pages/Error"
import Result from "./Components/Result"
import AddBook from "./Pages/AddBook";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const handleKeyDown = (event) => {
      // Disable common shortcuts
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'u': // Ctrl+U or Cmd+U
          case 's': // Ctrl+S or Cmd+S
          case 'p': // Ctrl+P or Cmd+P
            event.preventDefault();
            break;
          case 'Shift':
            if (event.key === 'i') {
              event.preventDefault();
            }
            break;
          default:
            break;
        }
      }

      // Disable F12 key
      if (event.keyCode === 123) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/extra" element={<Inside />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

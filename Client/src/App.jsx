import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./App.css";
import Navbar from "./Components/Navbar";
import Collection from "./Pages/Collection";
import Review from "./Pages/Review";
import Contact from "./Pages/Contact";
import Logout from "./Pages/Logout";
import Inside from "./Pages/Inside";
import Error from "./Pages/Error";
import Result from "./Components/Result";
import AddBook from "./Pages/AddBook";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from "./storage/auth";
import { css } from "@emotion/react"; // Import css from emotion
import Loading from "./Components/Loading";

function App() {
  const { setLoading, loading } = useAuth();
  return (
    <BrowserRouter>
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
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
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import Cars from "./pages/Cars";
import GiftDetails from "./pages/GiftDetails";
import PageNotFound from "./pages/PageNotFound";
import { Link } from "react-router-dom";
import CarCreationPage from "./pages/CreateCar";
import UpdateCars from "./pages/UpdateCars";

const App = () => {
  const [gifts, setGifts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const response = await fetch('/gifts');
        const data = await response.json();
        setGifts(data);
      } catch (error) {
        console.error('Error fetching gifts:', error);
      }
    };

    fetchGifts();
  }, []);

  const filteredGifts = gifts.filter(gift =>
    gift.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (location.pathname.includes("/cars/")) {
      setSearchTerm(""); 
    }
  }, [location.pathname]);

  let element = useRoutes([
    {
      path: "/",
      element: <CarCreationPage />,
    },
  {
      path: "/cars",
      element: <Cars />,
    },
    {
      path: "/cars/:carId",
      element: <UpdateCars />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.png" alt="logo" />
            <h1>UnEarthed</h1>
          </div>
          <div className="header-right">
            <Link to="/">
              <button className="homeBtn">Home</button>
            </Link>
&nbsp; &nbsp;&nbsp;
            <Link to="/cars">
              <button className="homeBtn">Cars</button>
            </Link>
          </div>
        </div>
      </header>

      {element}
    </div>
  );
};

export default App;

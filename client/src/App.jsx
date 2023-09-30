import "./App.css";
import React, { useState, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import Gifts from "./pages/Gifts";
import GiftDetails from "./pages/GiftDetails";
import PageNotFound from "./pages/PageNotFound";
import { Link } from "react-router-dom";

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
    if (location.pathname.includes("/gift/")) {
      setSearchTerm(""); // Reset search term when on GiftDetails page
    }
  }, [location.pathname]);

  let element = useRoutes([
    {
      path: "/",
      element: <Gifts data={searchTerm ? filteredGifts : gifts} />,
    },
    {
      path: "/gift/:id",
      element: <GiftDetails data={gifts} />,
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
            {
              location.pathname === "/" ? (
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search gifts..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              ) : null
            }
            <Link to="/">
              <button className="homeBtn">Home</button>
            </Link>
          </div>
        </div>
      </header>

      {element}
    </div>
  );
};

export default App;

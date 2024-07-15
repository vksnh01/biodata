import React,{useState,useEffect} from "react";
import Header from "./Header/Header";
import './NavButton/NavButton.css'
import "./AllCompFileHandler.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import headerData from "./Header/HeaderData";

function AllCompFileHandler() {
  const [navButton, setNavButton] = useState([]);
  useEffect(() => {
    setNavButton(headerData);
  }, []);
  return (
    <>
      <div className="allCompMainDiv">
        <BrowserRouter>
          <Header />
          <Routes>
            {navButton.map((elem) => {
              return (
                <>
                  <Route exact path={elem.path} element={elem.link} />
                </>
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default AllCompFileHandler;

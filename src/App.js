import React from "react";
import "./styles.css";
import Search from "./Search";
import Footer from "./Footer";
import { ReactComponent as Logo } from "./logo.svg";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>Weather in Your City</h1>
        <Search />
        <div className="columns">
          <div className="col-md-6">
            <Logo />
          </div>
          <div className="col-md-6" />
        </div>
        <Weather />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

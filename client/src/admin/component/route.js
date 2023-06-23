import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin";
import Order from "./order";
import Headers from "./headers";

class My_Route extends React.Component {
  render() {
    return (
      <div>
        
        <BrowserRouter>
            <Headers/>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default My_Route;

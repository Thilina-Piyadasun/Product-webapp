import React from "react";
import "./App.css";
import "./styles/main.scss";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Route path="/edit/:id" component={EditProduct} />
          <Route path="/" exact component={Home} />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

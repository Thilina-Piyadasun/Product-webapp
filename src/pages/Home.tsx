import * as React from "react";
import NavigationPanel from "../components/NavigationPanel";
import ProductContainer from "../components/ProductContainer";
import ProductTableContainer from "../components/ProductTableContainer";

const Home = () => {
  return (
    <>
      <NavigationPanel />
      <ProductContainer></ProductContainer>
      <div className="wrapper">
        <hr />
        <ProductTableContainer />
      </div>
    </>
  );
};

export default Home;

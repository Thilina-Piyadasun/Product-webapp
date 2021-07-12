import * as React from "react";
import NavigationPanel from "../components/NavigationPanel";
import ProductContainer from "../components/ProductContainer";

const EditProduct = () => {
    return (
        <>
            <NavigationPanel />
            <ProductContainer editMode={true}/>
        </>
    );
};

export default EditProduct;
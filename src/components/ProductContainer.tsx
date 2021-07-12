import * as React from "react";
import ProductForm from "../base-components/ProductForm";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { editProduct, saveProduct } from "../service/productService";
import { addProductAction, deleteProductAction, editProductAction, restAllAction } from "../actions/ProductActionTypes";
import { connect } from "react-redux";
import { productSelector } from "../reducers/ProductReducer";
import { withRouter } from "react-router-dom";

const ProductContainer = (props: any) => {

    const { addProduct, dispatchEditProduct, productList = [] } = props;

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productType, setProductType] = useState("");
    const [isActive, setIsActive] = useState(false);

    const { editMode = false } = props;

    const productTypes = [
        { value: "Books", display: "Books" },
        { value: "Electronics", display: "Electronics" },
        { value: "Food", display: "Food" },
        { value: "Furniture", display: "Furniture" },
        { value: "Toys", display: "Toys" },
    ];

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        if (editMode) {
            const id = props?.match.params?.id;
            const filterList = productList.filter((item: Product) => item.id === id);
            if (filterList && filterList.length > 0) {
                const data = filterList[0];
                setProductName(data.name);
                setProductType(data.type);
                setProductPrice(data.price);
                setIsActive(data.active);

            }

        }
    };

    const createUniqueProductId = () => {
        return "_" + Math.random().toString(36).substr(2, 9);
    };

    const handleSubmit = (data: any) => {

        const product: Product = {
            id: createUniqueProductId(),
            name: productName,
            price: productPrice,
            type: productType,
            active: isActive,
        };

        //invoke service and return the added object
        console.log(data);
        if (editMode) {
            editProduct(product).then((data: any) => {
                dispatchEditProduct(data);
                //Navigate to home page
                props.history.push(`/`);
            }).catch((error: any) => console.error(error));

        } else {
            console.log("save product", product);
            saveProduct(product).then((data: any) => {
                addProduct(data);
                setProductName("");
                setProductPrice(0);
                setProductType("");
                setIsActive(false);
            }).catch(error => {
                console.error(error);
            });
        }
    };

    const formHandler = (event: any, type: string) => {
        console.log(event);
        if (type === "PRODUCT_NAME") {
            setProductName(event.target.value);
        }
        if (type === "PRODUCT_PRICE") {
            setProductPrice(event.target.value);
        }
        if (type === "IS_ACTIVE") {
            setIsActive(event.target.checked);
        }
        if (type === "PRODUCT_TYPE") {
            setProductType(event.target.value)
        }
    };

    return (
        <ProductForm
            productName={productName}
            productPrice={productPrice}
            productType={productType}
            isActive={isActive}
            formHandler={formHandler}
            handleSubmit={handleSubmit}
            productTypes={productTypes}
            editMode={editMode}
        />
    )
};

const mapStateToProps = (state: any, ownProps: any) => {
    const productList = productSelector(state);
    return {
        productList,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    const addProduct = (productData: Product) => {
        dispatch(addProductAction(productData))
    }
    const restAll = (productData: Product) => {
        dispatch(restAllAction(productData));
    };
    const dispatchEditProduct = (productData: Product) => {
        dispatch(editProductAction(productData));
    };
    const deleteProduct = (productData: Product) => {
        dispatch(deleteProductAction(productData));
    };
    return { addProduct, restAll, dispatchEditProduct, deleteProduct };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductContainer));
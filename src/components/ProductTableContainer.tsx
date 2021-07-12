import * as React from "react";
import { connect } from "react-redux";
import { productSelector } from "../reducers/ProductReducer";
import { editProductAction, pageChange, restAllAction } from "../actions/ProductActionTypes";
import { useEffect } from "react";
import ProductTable from "./ProductTable";
import { loadAllProducts } from "../service/productService";
import { Product } from "../models/Product";
import { SORT_NAME, SORT_PRICE } from "../utils/Constants";
import { useState } from "react";

const ProductTableContainer = (props: any) => {

  const { restAll, productItemList = [] } = props;

  const [appliedSortOption, setAppliedSortOption] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(productItemList);
    constructProductSortList(SORT_NAME);
  }, [productItemList]);

  const fetchData = () => {
    loadAllProducts().then(data => {
      restAll(...data);
    }).catch(error => console.error(error));
  };

  const constructProductSortList = (option: string) => {

    let list = [];
    if (option === SORT_NAME) {
      list = productItemList.sort((a: Product, b: Product) => b.name > a.name ? -1 : 1);
    } else if (option === SORT_PRICE) {
      list = productItemList.sort((a: Product, b: Product) => +b.price - +a.price ? -1 : 1);
    } else {
      list = productItemList.sort((a: Product, b: Product) => b.type > a.type ? -1 : 1);
    }
    console.log(list.map((item: Product) => item.price));
    setSortedProducts(list);
    setAppliedSortOption(option);
  };

  return (
    <ProductTable productItemList={sortedProducts} onSort={(option: string) => constructProductSortList(option)} />
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  const productItemList = productSelector(state);
  return {
    productItemList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const restAll = (product: Product[]) => {

    dispatch(restAllAction(product));
  };
  const editTodo = (product: Product) => {
    dispatch(editProductAction(product));
  };
  const dispatchPageChange = (pageId: number) => {
    dispatch(pageChange(pageId));
  };
  return { restAll, editTodo, dispatchPageChange };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTableContainer);

import * as React from "react";
import { useState } from "react";
import { Todo } from "../models/Todo";
import { deleteProductAction, editProductAction, pageChange, restAllAction, productSort } from "../actions/ProductActionTypes";
import { connect } from "react-redux";
import ProductCard from "../base-components/ProductCard";
import { Product } from "../models/Product";
import { deleteProduct } from "../service/productService";
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import TableHead from '@material-ui/core/TableHead';
import ConfirmDialog from "./confirm-dialog";
import { SORT_NAME, SORT_PRICE, SORT_TYPE } from "../utils/Constants";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ArrowBack(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
  );
}

function ArrowForward() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" /></svg>
  );
}


const ProductTable = (props: any) => {
  const classes = useStyles();
  const [showConfirmDialog, isShowConfirmDialog] = useState(false);
  const [actionableProduct, setActionableProduct] = useState<Product>();
  const [pageId, setPageId] = useState(1);

  const { productItemList = [], dispatchDeleteProduct, dispatchPageChange, onSort } = props;

  const ITEMS_PER_PAGE = 5;
  const deletePressed = (item: any) => {
    isShowConfirmDialog(true);
    setActionableProduct(item);
  };

  const onDelete = () => {
    //send delete call
    //update the redux store once successfully deleted.
    isShowConfirmDialog(false);
    if (actionableProduct) {
      deleteProduct(actionableProduct.id).then((data: any) => {
        dispatchDeleteProduct(data);
        setActionableProduct(undefined);
      }).catch((error: any) => console.error(error));
    }

  };

  const onPopUpCancel = () => {
    isShowConfirmDialog(false);
    setActionableProduct(undefined);
  };

  const incrementPageId = () => {
    const currentPage = pageId + 1;
    console.log(currentPage);
    setCurrentPage(currentPage);
  };

  const decrementPageId = () => {
    const currentPage = pageId - 1;
    setCurrentPage(currentPage);
  };

  const setCurrentPage = (currentPage: number) => {
    setPageId(currentPage);
    dispatchPageChange(currentPage);
  };


  const displayTodo = (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell onClick={() => onSort(SORT_NAME)}>Product Name</TableCell>
              <TableCell align="right" onClick={() => onSort(SORT_PRICE)}>Price</TableCell>
              <TableCell align="right" onClick={() => onSort(SORT_TYPE)}>Type</TableCell>
              <TableCell align="right">Availability</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productItemList.slice((pageId - 1) * ITEMS_PER_PAGE, pageId * ITEMS_PER_PAGE).map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                onDelete={() => deletePressed(product)}
              />
            )

            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell align="right" />
              <TableCell align="right" />
              <TableCell align="right" />
              <TableCell align="right" />
              <TableCell align="right">

              </TableCell>
              <TableCell align="right">
                <span>
                  {
                    pageId > 1 ? <IconButton edge="start" color="inherit" aria-label="menu" onClick={decrementPageId} >
                      <ArrowBack />
                    </IconButton> : null
                  }
                  {pageId}
                  {
                    pageId * 5 <= productItemList.length ? <IconButton edge="start" color="inherit" aria-label="menu" onClick={incrementPageId}
                    >
                      <ArrowForward />
                    </IconButton> : null
                  }

                </span>

              </TableCell>

            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>


    </>
  );

  return (
    <div className="todo-gallery">
      {productItemList.length === 0 ? (
        <div className="emptyTodo">No Products Found!.Please Create a new one</div>
      ) : (
        displayTodo
      )}
      {
        showConfirmDialog ? <ConfirmDialog
          onCancel={onPopUpCancel}
          onDelete={onDelete}
        >
        </ConfirmDialog> : null
      }
    </div>
  );
};


const mapDispatchToProps = (dispatch: any) => {
  const restAll = (productData: any) => {
    dispatch(restAllAction(productData));
  };
  const editTodo = (todoData: Todo) => {
    dispatch(editProductAction(todoData));
  };
  const dispatchDeleteProduct = (todoData: Todo) => {
    dispatch(deleteProductAction(todoData));
  };
  const dispatchPageChange = (pageId: number) => {
    dispatch(pageChange(pageId));
  };
  const dispatchSort = (option: string) => {
    dispatch(productSort(option));
  };
  return { restAll, editTodo, dispatchDeleteProduct, dispatchPageChange, dispatchSort };
};

export default connect(null, mapDispatchToProps)(ProductTable);

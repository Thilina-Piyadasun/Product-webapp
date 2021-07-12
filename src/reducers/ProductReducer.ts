import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  REST_ALL_PRODUCT,
} from "../actions/ProductActionTypes";
import { Todo } from "../models/Todo";

const initialState = {
  product_list: []
};

const ProductReducer = (state: any = initialState, action: any) => {
  if (action.type === ADD_PRODUCT) {
    return {
      ...state,
      product_list: state.product_list.concat(action.payload),
    };
  }
  else if (action.type === REST_ALL_PRODUCT) {
    console.log("action.payload", action.payload);
    state.product_list = [];
    return {
      ...state,
      product_list: state.product_list.concat(action.payload),
    };
  } else if (action.type === EDIT_PRODUCT) {
    const todo_items = state.product_list.filter(
      (item: Todo) => item.id !== action.payload.id
    );
    return {
      ...state,
      product_list: todo_items.concat(action.payload),
    };
  } else if (action.type === DELETE_PRODUCT) {
    const todo_items = state.product_list.filter(
      (item: Todo) => item.id !== action.payload.id
    );
    return {
      ...state,
      product_list: JSON.parse(JSON.stringify(todo_items)),
    };
  }
  return state;
};



export const productSelector = (state: any = {}) => {
  const { product_list } = state;
  return product_list;
};

export default ProductReducer;

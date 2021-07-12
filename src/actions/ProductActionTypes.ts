export const ADD_PRODUCT = "ADD_PRODUCT";
export const REST_ALL_PRODUCT = "REST_ALL_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const PAGE_CHANGE = "PAGE_CHANGE";
export const PRODUCT_SORT = "PRODUCT_SORT";

export const addProductAction = (payload: any) => {
  return {
    type: ADD_PRODUCT,
    payload: payload,
  };
};

export const deleteProductAction = (payload: any) => {
  return {
    type: DELETE_PRODUCT,
    payload: payload,
  };
};

export const editProductAction = (payload: any) => {
  return {
    type: EDIT_PRODUCT,
    payload: payload,
  };
};

export const restAllAction = (payload: any) => {
  console.log("[Action]", payload);
  return {
    type: REST_ALL_PRODUCT,
    payload: payload,
  };
};

export const pageChange = (payload: any) => {
  return {
    type: PAGE_CHANGE,
    payload: payload,
  }
};

export const productSort = (payload: any) => {
  return {
    type: PRODUCT_SORT,
    payload: payload,
  }
};
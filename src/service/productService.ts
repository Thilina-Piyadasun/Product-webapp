import axios, { AxiosResponse } from "axios";
import { URL } from "../utils/Constants";
import { ProductResponse } from "../models/product-response";
import { Product } from "../models/Product";

export const saveProduct = async (product: Product) => {
    return new Promise((resolve, reject) => {
        axios
            .post(URL, product)
            .then((response: AxiosResponse<ProductResponse>) => {
                console.log(response);
                if (response.status === 200) {
                    const { _data } = response.data;
                    const todo = _data[0];
                    if (todo.id === product.id) {
                        resolve(product);
                    }
                } else {
                    console.log("Error while inserting the document ", product);
                    reject();
                }
            })
            .catch((err) => {
                console.error(err);
                reject();
            });
    });

};

export const loadAllProducts = async (): Promise<any[]> => {

    return new Promise((resolve, reject) => {
        axios
            .get(URL)
            .then((response: AxiosResponse<ProductResponse>) => {
                if (response.status === 200) {
                    const { _data } = response.data;
                    console.log(_data);
                    resolve(_data);
                } else {
                    console.log("Error while loading data ");
                    reject([]);
                }
            })
            .catch((err) => {
                console.error(err);
                reject([]);
            });
    })

};

export const deleteProduct = async (productId: string): Promise<Product> => {
    return new Promise(((resolve, reject) => {
        axios
            .delete(`${URL}/${productId}`)
            .then((response: AxiosResponse<ProductResponse>) => {
                console.log(response);
                if (response.status === 200) {
                    const { _data } = response.data;
                    const product = _data[0];
                    if (product.id === productId) {
                        resolve(product);
                    }
                } else {
                    console.log("Error while deleting the Product ",);
                    reject();
                }
            })
            .catch((err) => {
                console.error(err);
                reject();
            });
    }))
};

export const editProduct = async (item: Product) => {
    return new Promise((resolve, reject) => {
        axios
            .put(URL, item)
            .then((response: AxiosResponse<ProductResponse>) => {
                console.log(response);
                if (response.status === 200) {
                    const { _data } = response.data;
                    const product = _data[0];
                    resolve(product);

                } else {
                    console.log("Error while updating the document ", item);
                    reject();
                }
            })
            .catch((err) => {
                console.error(err);
                reject();
            });
    })
};


export const loadProductById = async (id: string): Promise<Product> => {
    return new Promise((resolve, reject) => {
        axios
            .get(URL + "?id=" + id)
            .then((response: AxiosResponse<ProductResponse>) => {
                if (response.status === 200) {
                    const { _data } = response.data;
                    const product: Product = _data[0];
                    console.log(product);
                    resolve(product);
                } else {
                    console.log("Error while loading data ");
                    reject(null);
                }
            })
            .catch((err) => {
                console.error(err);
                reject(null);
            });
    });
};
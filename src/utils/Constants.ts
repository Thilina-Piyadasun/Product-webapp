import config from '../config/config';

export enum TODO_STATE {
  OPEN = "OPEN",
  DONE = "DONE",
}

export const URL = `http://${config.api_host}:${config.api_port}/todo/api`;

export const EMPTY_LIST_OPEN = "No Open Todo's found";
export const EMPTY_LIST_DONE = "No Completed Todo's found";
export const EMPTY_LIST_ALL = "No Todo's found.Please create a New one";
export const SORT_NAME = "SORT_NAME";
export const SORT_PRICE = "SORT_PRICE";
export const SORT_TYPE = "SORT_TYPE";

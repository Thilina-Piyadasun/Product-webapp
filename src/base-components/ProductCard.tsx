import * as React from "react";
import { Link } from "react-router-dom";
import TableRow from "@material-ui/core/TableRow";
import TableCell from '@material-ui/core/TableCell';

const ProductCard = (props: any) => {
  const { product, onDelete, id } = props;

  const { name, price, type, active } = product;

  const getLink = () => {
    return `/edit/${product.id}`
  }

  return (

    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">{type}</TableCell>
      <TableCell align="right">{active ? "Available" : "Out of Stock"}</TableCell>
      <TableCell align="right"><Link to={getLink()}>
        Edit
      </Link></TableCell>
      <TableCell align="right"><button onClick={onDelete}>Delete</button></TableCell>
    </TableRow>
  );
};

export default ProductCard;

import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { Card } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 500,
      maxWidth: 1000,
      margin: "auto",
      padding: 50
    },
    inputs: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 400,
      },
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const ProductForm = (props: any) => {
  const { handleSubmit, productName, productPrice, productType, isActive, formHandler, productTypes, editMode } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Product Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Product Name"
            fullWidth
            autoComplete="Product Name"
            onChange={(event) => formHandler(event, "PRODUCT_NAME")}
            value={productName} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="number"
            required
            id="price"
            label="Price"
            fullWidth
            onChange={(event) => formHandler(event, "PRODUCT_PRICE")}
            value={productPrice}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            value={productType}
            onChange={(event) => formHandler(event, "PRODUCT_TYPE")}
          >
            {
              productTypes.map((type: any, index: any) => <MenuItem key={index} value={type.value}>{type.display}</MenuItem>)
            }
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveCard" value="yes" onChange={(event) => formHandler(event, "IS_ACTIVE")} checked={isActive} />}
            label="Is Product Availabe"
          />

        </Grid>

        <Grid item xs={12} md={8}>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            {editMode ? "Edit" : "Add"}
          </Button>
        </Grid>

      </Grid>
    </Card>
  );
};

export default ProductForm;

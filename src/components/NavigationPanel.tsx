import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Todo } from "../models/Todo";
import { addProductAction } from "../actions/ProductActionTypes";
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Home component with HeaderBar and Icon
 * @type {(props?: any) => ClassNameMap<string>}
 */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    '& > svg': {
        margin: theme.spacing(2),
    },
}));

function HomeIcon(props: any) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const NavigationPanel = () => {

    const classes = useStyles();

    return (
        <div className="sticky-bar">
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                        href={"/"}>

                        <HomeIcon />
                    </IconButton>

                    <Typography variant="h6" color="inherit">
                        Products
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    const submitTodo = (todoData: Todo) => dispatch(addProductAction(todoData));
    return { submitTodo };
};

export default connect(null, mapDispatchToProps)(NavigationPanel);

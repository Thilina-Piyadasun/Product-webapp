import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

/**
 * This component dialog will use to confirm the product
 * @param props
 * @returns {*}
 * @constructor
 */
const ConfirmDialog = (props: any) => {

    const { onCancel, onDelete } = props;

    return (
        <div>
            <Dialog
                open={true}
                keepMounted
                onClose={onCancel}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Do you want to delete the product?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel} color="primary">
                        Close
                    </Button>
                    <Button onClick={onDelete} color="primary">
                        Delete
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ConfirmDialog;
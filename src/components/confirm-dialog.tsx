import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

/**
 * This component dialog will use to confirm /reset the user image selection
 * Click on reset button will rest all the current selection
 * Click on Save button will send a post request to pastbook-api and save the selected images.
 * Once the save is sucess application will navigate to /memories/:documentId route
 * If fails it will show a error message.
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
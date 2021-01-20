import React, { useState } from "react";
import { StyledButton } from "../shared/StyledButton";
import {
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ResetButton() {
  const [open, setOpen] = useState(false);

  const clearHistory = () => {
    window.localStorage.removeItem("history");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={clearHistory}>Reset</StyledButton>
      <Dialog
        open={open}
        onClose={handleClose}
        keepMounted
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Notification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your history has successfully cleared.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { ResetButton };
